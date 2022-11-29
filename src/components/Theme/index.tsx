import React, { ReactNode } from 'react';
import * as C from './styles';
import Header from '../Header';
import SideBarItem from '../SideBarItem'

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SideBarItem 
              title="Personal Data"
              description="insert your personal data"
              icon="profile"
              path="/"
            />
            <SideBarItem 
              title="Profissional"
              description="Your career level"
              icon="book"
              path="/step2"
            />
            <SideBarItem 
              title="Contacts"
              description="Your contact details"
              icon="mail"
              path="/step3"
            />
          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};