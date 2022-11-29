import React from 'react';
import * as C from './styles';
import { FaBookReader } from 'react-icons/fa'

const Header = () => {
  return (
    <C.Container>
      <h1><FaBookReader color='white' size={30} />  Dev register</h1> 
      <p>Register in our developer bank</p>
    </C.Container>
  );
};

export default Header;