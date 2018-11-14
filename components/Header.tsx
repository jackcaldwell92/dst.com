import Link from 'next/link';
import * as React from 'react';
import { Navbar } from '../styles/components/Navbar';
import { Links } from '../styles/components/Links';
import { LinkText } from '../styles/components/LinkText';
import { Logo } from '../styles/components/Logo';

export const Header = () => (
  <Navbar>
    <Logo>DS Textile Sourcing</Logo>
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
