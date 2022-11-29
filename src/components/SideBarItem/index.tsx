import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';
import { FaUserCircle, FaToolbox, FaAddressCard } from 'react-icons/fa'

type SideBarItemProps = {
  title: string,
  description: string,
  icon: string,
  path: string,
  active: boolean,
};

const SideBarItem = ({title, description, icon, path, active}: SideBarItemProps) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          { icon === 'profile' &&
            <FaUserCircle fill='white' size={25} />
          }
          { icon === 'toolbox' &&
            <FaToolbox fill='white' size={25} />
          }
          { icon === 'mail' &&
            <FaAddressCard fill='white' size={25} />
          }
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};

export default SideBarItem;