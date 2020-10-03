import React from 'react';
import Navigation from '../components/navigation/navigation';
import GlobalStyles from '../assets/styles/GlobalStyles';

const MainLayouts = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    {children}
  </>
);

export default MainLayouts;
