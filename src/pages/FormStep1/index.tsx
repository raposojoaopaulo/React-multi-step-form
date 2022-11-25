import React from 'react';
import * as C from './styles';
import { Link } from 'react-router-dom';

export const FormStep1 = () => {
  return (
    <C.Container>
      <p>Step 1/3</p>
      <button>
        <Link to="/step2">Next</Link>
      </button>
    </C.Container>
  );
}