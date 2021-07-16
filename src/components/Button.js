import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

//Styles
const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height:60px;
  border-radius: 30px;
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  color: white;
  :hover{
    opacity: 0.8;
  }
`;



//function
const Button = ({text, callback}) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default Button;