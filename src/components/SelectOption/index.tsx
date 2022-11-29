import React from 'react';
import * as C from './styles';

type Props = {
  title: string;
  description: string;
  icon: string;
  select: boolean;
  onClick: () => void;
};

const SelectOption = ({ title, description, icon, select, onClick }: Props) => {
  return (
    <C.Container onClick={onClick} selected={select}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};

export default SelectOption;