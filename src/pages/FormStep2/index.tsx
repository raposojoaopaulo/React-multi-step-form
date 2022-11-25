import React from 'react';
import * as C from './styles';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
  return (
    <C.Container>
      <p>Step 2/3</p>
      <button>
        <Link to="/step3">Next</Link>
      </button>
    </C.Container>
  );
}