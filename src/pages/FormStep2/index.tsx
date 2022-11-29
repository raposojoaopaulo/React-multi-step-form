import React, { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext'; 
import  SelectOption  from '../../components/SelectOption';
import BasicButton from '../../components/BasicButton';


export const FormStep2 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === '') {
      navigate("/")
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }     
  }, []);

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate("/step3")
    } else {
      alert("Choose your career level!")
    }    
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  };

  const voidFunction = () => {
    console.log('You back one page')
  };

  return (
    <Theme>    
      <C.Container>
        <p>Step {state.currentStep}/3</p>
        <h1>{state.name}, what best describes you?</h1>
        <p>choose your career level</p>
        <hr />
        <SelectOption 
          title="Dev Jr"
          description="Less than 3 years as a programmer"
          icon="🥳"
          select={state.level === 0 }
          onClick={() => setLevel(0)}
        />
        <SelectOption 
          title="Dev Full"
          description="I'm a programmer between 3 to 10 years"
          icon="😎"
          select={state.level === 1 }
          onClick={() => setLevel(1)}
        />
        <SelectOption 
          title="Dev Senior"
          description="I've been a programmer for over 10 years"
          icon="👴"
          select={state.level === 2 }
          onClick={() => setLevel(2)}
        />
        <C.ButtonContainer>
          <Link to='/'>
            <BasicButton 
              text='Back'
              additionalClasses=''
              onClick={voidFunction}
            />  
          </Link>

          <BasicButton 
            text="Next"
            additionalClasses='primary'
            onClick={handleNextStep}
          />    
        </C.ButtonContainer>  
      </C.Container>
    </Theme>
  );
}

