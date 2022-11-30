import React from 'react';
import * as C from './styles';
import Header from '../../components/Header';
import { useForm } from '../../contexts/FormContext';
import BasicButton from '../../components/BasicButton';
import { useNavigate } from 'react-router-dom';
import InfoLabel from '../../components/InfoLabel';
import LevelPoint from '../../components/LevelPoint';

const DevProfile = () => {
  const navigate = useNavigate();
  const { state } = useForm();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Body>
          <h1>Dev Profile</h1>
          <InfoLabel 
            label="Name" 
            data={state.name} 
          />
          <C.LevelArea>
            <LevelPoint 
              level="Dev Jr"
              icon="🥳"
              active={state.level === 0} 
            />
            <LevelPoint 
              level="Dev Full"
              icon="😎"          
              active={state.level === 1} 
            />
            <LevelPoint 
              level="Dev Senior"
              icon="👴"        
              active={state.level === 2} 
            />
          </C.LevelArea>
          <InfoLabel 
            label="Email" 
            data={state.email} 
          />
          <InfoLabel 
            label="Github" 
            data={state.github} 
          />
          <BasicButton 
            text="Back to home"
            additionalClasses=''
            onClick={handleBackHome}
          /> 
        </C.Body>
      </C.Area>      
    </C.Container>
  );
};

export default DevProfile;
