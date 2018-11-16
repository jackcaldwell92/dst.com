import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { AboutDiv } from '../styles/components/AboutDiv';
import { HeaderText } from '../styles/components/HeaderText';
import { WideBodyText } from '../styles/components/WideBodyText';

export const About = () => (
  <AboutDiv>
    <Fade>
      <HeaderText>About</HeaderText>
    </Fade>
    <Fade duration={2000}>
      <WideBodyText>
        DS Textile Sourcing Limited (DST) was established by Steve and Danny
        Stones in 2013.
      </WideBodyText>
      <WideBodyText>
        Our services include garment design, fabric and trim sourcing, fully
        factored production, consultancy, stock holding, and supply of finished
        textile products within the UK.
      </WideBodyText>
      <WideBodyText>
        We specialize in producing personal protective equipment for the private
        and public sector including military, police, ambulance and fire
        services, as well as personal load carriage equipment (PLCE), waterproof
        garments, armour carriers, tactical harnesses, and operational clothing.
      </WideBodyText>
    </Fade>
  </AboutDiv>
);
