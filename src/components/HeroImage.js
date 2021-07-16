import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

//Styles
const Wrapper = styled.div`
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0) 41%,
      rgba(0,0,0,0.65) 100%
    ),
  url(${({image}) => image}), var(--darkGrey);
  background-size: 100%, cover ;
  background-position: center;
  height: 400px;
  position: relative;
  animation: animateHeroImage 0.5s;
  
  @keyframes animateHeroImage{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`;

const Content = styled.div` 
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white); 
    h1{
    font-size:var(--fontSuperBig);
    
    @media screen and (max-width:720px){
      font-size: var(--fontBig);
    }
    p{
      font-size:var(--fontMed);
    
      @media screen and (max-width:720px){
        font-size: var(--fontSmall);
      }    
      
      @media screen and (max-width: 720px){
        max-width:100%
      }
    }
    
  }
`;


//function
const HeroImage = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text >
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>

)

HeroImage.propTypes={
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage;