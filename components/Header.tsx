import * as React from 'react';
import { Links } from '../styles/components/Links';
import { LinkText } from '../styles/components/LinkText';
import { Logo } from '../styles/components/Logo';
import { Navbar } from '../styles/components/Navbar';

interface IProps {
  handleNavigation: (navigation: string) => void;
}

export const Header = (props: IProps) => (
  <Navbar>
    <div>
      <Logo
        onClick={() => props.handleNavigation('home')}
        src="/static/logo.png"
      />
    </div>
    <Links>
      <LinkText>About</LinkText>
      <LinkText>Services</LinkText>
      <LinkText>Contact</LinkText>
    </Links>
  </Navbar>
);
