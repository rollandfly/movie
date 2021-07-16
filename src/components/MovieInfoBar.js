import React from "react";
import PropTypes from 'prop-types';


import styled from 'styled-components';

import {calcTime, convertMoney} from "../helpers";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  min-height: 100px;
  padding: 0 20px;

  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  
  .column{
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex:1;
    :first-child{
      margin-left:0;
    }
    :last-child{
      margin-right: 0;
    }
    
    @media screen and (max-width: 768px){
      display: flex;
      align-items: center;
      justify-content: center;
      .column{
        margin: 20px 0;
      }
      
    }
  }
`;



const MovieInfoBar = ({time, budget, revenue})=>(

    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget : {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue : {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfoBar.propTypes={
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;