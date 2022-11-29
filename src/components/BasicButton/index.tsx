import React from 'react';
import * as C from './styles';

type BasicButtonProps = {
  additionalClasses: string,
  text: string,
  onClick: () => void,
};

const BasicButton = ({text, additionalClasses, onClick}: BasicButtonProps) => {
  return (
    <C.Container typeButton={additionalClasses} onClick={onClick}>
      <button>{text}</button>
    </C.Container>
  );
};

export default BasicButton;