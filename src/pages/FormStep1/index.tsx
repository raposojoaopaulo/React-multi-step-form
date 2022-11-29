import React, { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext'; 
import TextInput from '../../components/TextInput'
import BasicButton from '../../components/BasicButton';


export const FormStep1 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, [dispatch]);

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate("/step2")
    } else {
      alert("Insert your name!")
    }    
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  return (
    <Theme>    
      <C.Container>
        <p>Step {state.currentStep}/3</p>
        <h1>First your name</h1>
        <p>Fill in the field below with your full name</p>
        <hr />
          <TextInput 
            label='Full Name'
            type='text'
            autoFocus={true}
            value={state.name}
            onChange={handleNameChange}
          />
        <BasicButton 
          text='Next'
          additionalClasses='primary'
          onClick={handleNextStep}
        />
      </C.Container>
    </Theme>
  );
}