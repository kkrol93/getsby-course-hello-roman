import React from 'react';
import Image from 'gatsby-image';

import { graphql } from 'gatsby';

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      id
      title
      author
      articleContent {
        ... on DatoCmsArticleImage {
          id
          articleImage {
            fixed(width: 750) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
        }
        ... on DatoCmsHeading {
          heading
          id
        }
        ... on DatoCmsParagraph {
          paragraph
          id
        }
      }
      feturedImage {
        fixed(width: 750) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
`;

const PostLayout = ({ data }) => (
  <div>
    <h1>{data.datoCmsArticle.title}</h1>
    <p>{data.datoCmsArticle.author}</p>
    <Image fixed={data.datoCmsArticle.feturedImage.fixed} />
    <div>
      {data.datoCmsArticle.articleContent.map((item) => {
        const itemKey = Object.keys(item)[1];

        switch (itemKey) {
          case 'paragraph':
            return <p key={item.id}>{item[itemKey]}</p>;
          case 'heading':
            return <h2 key={item.id}>{item[itemKey]}</h2>;
          case 'articleImage':
            return <Image key={item.id} fixed={item[itemKey].fixed} />;
          default:
            return null;
        }
      })}
    </div>
  </div>
);
export default PostLayout;
