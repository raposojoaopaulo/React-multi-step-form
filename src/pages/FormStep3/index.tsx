import React, { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext'; 


export const FormStep3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  }, [dispatch]);

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate("/")
    } else {
      alert("Insert your name!")
    }    
  }

  return (
    <Theme>    
      <C.Container>
        <p>Step {state.currentStep}/3</p>
        <h1>First your name</h1>
        <p>Fill in the field below with your full name</p>
        <hr />
        
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
}