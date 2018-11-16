import * as React from 'react';
import { ContactDiv } from '../styles/components/ContactDiv';
import { HeaderText } from '../styles/components/HeaderText';
import { NameInput } from '../styles/components/NameInput';

export const Contact = () => (
  <ContactDiv>
    <HeaderText>Contact</HeaderText>
    <NameInput placeholder="Name" />
  </ContactDiv>
);
