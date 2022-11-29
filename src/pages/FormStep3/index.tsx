import React, { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext'; 
import BasicButton from '../../components/BasicButton';


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

  const voidFunction = () => {
    console.log('Void Function')
  }

  return (
    <Theme>    
      <C.Container>
        <p>Step {state.currentStep}/3</p>
        <h1>First your name</h1>
        <p>Fill in the field below with your full name</p>
        <hr />
        
        <C.ButtonContainer>
          <Link to='/'>
            <BasicButton 
              text='Back'
              additionalClasses=''
              onClick={voidFunction}
            />  
          </Link>
        </C.ButtonContainer>
      </C.Container>
    </Theme>
  );
}