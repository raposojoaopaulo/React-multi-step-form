import React, { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext'; 
import  SelectOption  from '../../components/SelectOption';


export const FormStep2 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }, [dispatch]);

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate("/step3")
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
        <SelectOption 
          title="Dev Jr"
          description="Less than 3 years as a programmer"
          icon="🥳"
        />
        <SelectOption 
          title="Dev Full"
          description="I'm a programmer between 3 to 10 years"
          icon="😎"
        />
        <SelectOption 
          title="Dev Senior"
          description="I've been a programmer for over 10 years"
          icon="👴"
        />
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
}