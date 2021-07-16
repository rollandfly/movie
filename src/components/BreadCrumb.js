import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

const Content = styled.div`
    display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  span{
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;
    
    @media screen and (max-width: 768px){
      font-size: var(--fontSmall);
    }
  }
`;



const BreadCrumb = ({movieTitle})=>(
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

BreadCrumb.propTypes={
    movieTitle: PropTypes.string
}

export default BreadCrumb;