import React, { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext'; 
import BasicButton from '../../components/BasicButton';
import TextInput from '../../components/TextInput'


export const FormStep3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === '') {
      navigate("/")
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }     
  }, []);

  const handleRegister = () => {
    if(state.email !== '' && state.github !== '' ) {
      // alert(`${state.name}
      //   ${state.level}
      //   ${state.email} 
      //   ${state.github}
      // `)
      navigate("/devprofile")
    } else {
      alert("Enter your email an github")
    }    
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  const backPage = () => {
    console.log('You back one page')
  }

  return (
    <Theme>    
      <C.Container>
        <p>Step {state.currentStep}/3</p>
        <h1>Nice {state.name}!</h1>
        <p>Enter your contact details now</p>
        <hr />
        <TextInput
          label='Email' 
          type='email'
          autoFocus={true}
          value={state.email}
          onChange={handleEmailChange}
        />
        <TextInput 
          label='Github'
          type='url'
          autoFocus={false}
          value={state.github}
          onChange={handleGithubChange}
        />        
        <C.ButtonContainer>
          <Link to='/step2'>
            <BasicButton 
              text='Back'
              additionalClasses=''
              onClick={backPage}
            />  
          </Link>
          <BasicButton 
            text="Register"
            additionalClasses='primary'
            onClick={handleRegister}
          /> 
        </C.ButtonContainer>
      </C.Container>
    </Theme>
  );
}