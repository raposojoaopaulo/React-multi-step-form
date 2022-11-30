import React from 'react';
import * as C from './styles';

type LevelPointProps = {
  level: string,
  icon: string,
  active: boolean,
};

const LevelPoint = ({ level, icon, active }: LevelPointProps) => {
  return (
    <C.Container>
      <C.IconArea active={active}>
        { icon }
      </C.IconArea>
      <C.LevelText active={active}>
        { level }
      </C.LevelText>
    </C.Container>
  );
};

export default LevelPoint;
