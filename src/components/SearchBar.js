import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import searchIcon from '../images/search-icon.svg';


//Styles
const Wrapper = styled.div`
    diplay: flex;
  align-items: center;
  height: 100px;
    background-color: var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
    position: relative;
  max-width: var(--maxWidth);
  width:100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color:white;
  
  img{
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }
  input{
    font-size: var(--fontBig);
    position: absolute;
    left:0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border:  0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: white;
    
    :focus{
      outline: none;
    }
  }
  
`;




//function
const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes={
    setSearchTerm: PropTypes.func
}

export default SearchBar;