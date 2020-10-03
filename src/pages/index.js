import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Button from '../components/Button/Button';

const ContentWrapper = styled.div`
  width: 65%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: calc(100vh - 80px);
  h1 {
    font-size: 85px;
    margin: 0;
    width: 500px;
    line-height: 0.9;
  }
  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`;
const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 35%;
  height: 100%;
  object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta aspernatur illum
        voluptatum et earum!
      </p>
      <Button>zoba to</Button>
    </ContentWrapper>
    <ImageWrapper
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
      alt=""
    />
  </>
);
//  duotone: { highlight: "#f00e2e", shadow: "#192550" }
export const mainImage = graphql`
  {
    file(name: { eq: "rammstein" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1200
          quality: 100
          duotone: { highlight: "#f00e2e", shadow: "#192550", opacity: 40 }
          toFormat: JPG
        ) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`;
export default IndexPage;
