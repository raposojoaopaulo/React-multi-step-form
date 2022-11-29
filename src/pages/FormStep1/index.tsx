import React from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from "react-router-dom";


export const FormStep1 = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/step2")
  }

  return (
    <Theme>    
      <C.Container>
        <p>Step 1/3</p>
        <h1>First your name</h1>
        <p>Fill in the field below with your full name</p>
        <hr />
        <label>
          Full name
          <input 
            type="text"
            autoFocus 
          />
        </label>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
}