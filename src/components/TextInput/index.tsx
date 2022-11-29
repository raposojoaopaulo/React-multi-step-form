import React, {ChangeEvent} from 'react';
import * as C from './styles';

type TextInputProps = {
  label: string,
  type: string,
  autoFocus: boolean,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

const TextInput = ({label, type, autoFocus, value, onChange}: TextInputProps) => {
  return (
    <C.Container>
      <label>
        {label}
        <input 
          type={type}
          autoFocus={autoFocus}
          value={value}
          onChange={onChange}
        />
      </label>
    </C.Container>
  );
};

export default TextInput;