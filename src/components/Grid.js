import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

//Styles
const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  h1{
    color: var(--medGrey);
    
    @media screen and (max-width: 768px){
      font-size: var(--fontBig);
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  
`;

//function
const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.propTypes = {
    header:PropTypes.string
}

export default Grid;