import Link from 'next/link';
import * as React from 'react';
import { Links } from '../styles/components/Links';
import { LinkText } from '../styles/components/LinkText';
import { Logo } from '../styles/components/Logo';
import { Navbar } from '../styles/components/Navbar';

export const Header = () => (
  <Navbar>
    <div>
      <Logo src="/static/logo.png" />
    </div>
    <Links>
      <Link href="/">
        <LinkText>Home</LinkText>
      </Link>
      <Link href="/contact">
        <LinkText>Contact</LinkText>
      </Link>
    </Links>
  </Navbar>
);
