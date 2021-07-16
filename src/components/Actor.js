import React from "react";

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
    color: white;
    background: var(--darkGrey);
    border-radius: 20px;
  text-align: center;
  
  h3{
    margin: 10px 0 0 0;
  }
  p{
    margin: 5px 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 15px;


  :hover {
    opacity: 0.8;
  }
`;

const Actor = ({name, character, imageUrl})=>(
    <Wrapper>
        <Image src={imageUrl} alt='movie-thumb'/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default Actor;