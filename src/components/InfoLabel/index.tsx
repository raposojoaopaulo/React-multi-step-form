import React from 'react';
import * as C from './styles';

type InfoLabelProps = {
  label: string;
  data: string;
};

const InfoLabel = ({ label, data }: InfoLabelProps) => {
  return (
    <C.Container>
      <C.LabelSpace>
        {label}: 
      </C.LabelSpace>
      <C.DataSpace>
        {data}
      </C.DataSpace>
    </C.Container>
  );
};

export default InfoLabel;