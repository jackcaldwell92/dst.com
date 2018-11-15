import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { AboutDiv } from '../styles/components/AboutDiv';
import { BodyText } from '../styles/components/BodyText';
import { HeaderText } from '../styles/components/HeaderText';
import { IndexBodyGrid } from '../styles/components/IndexBodyGrid';
import { LeftImage } from '../styles/components/LeftImage';
import { LeftText } from '../styles/components/LeftText';
import { RightImage } from '../styles/components/RightImage';
import { RightText } from '../styles/components/RightText';
import { WideBodyText } from '../styles/components/WideBodyText';

export const IndexBody = () => (
  <>
    <AboutDiv>
      <Fade>
        <HeaderText>About DS Textile Sourcing</HeaderText>
      </Fade>
      <Fade duration={2000}>
        <WideBodyText>
          DS Textile Sourcing Limited (DST) was established by Steve and Danny
          Stones in 2013.
        </WideBodyText>
        <WideBodyText>
          Our services include garment design, fabric and trim sourcing, fully
          factored production, consultancy, stock holding, and supply of
          finished textile products within the UK.
        </WideBodyText>
        {/* <WideBodyText>
          Further to this, DST allows sourcing of production from manufacturers
          , allowing the production of items which are outside the scope of KTM
          in both type and numbers.
        </WideBodyText> */}
        <WideBodyText>
          We specialize in producing personal protective equipment for the
          private and public sector including military, police, ambulance and
          fire services, as well as personal load carriage equipment (PLCE),
          waterproof garments, armour carriers, tactical harnesses, and
          operational clothing.
        </WideBodyText>
        <WideBodyText>
          DST offers fully factored production or cut and make according to
          client requirements.
        </WideBodyText>
      </Fade>
    </AboutDiv>
    <IndexBodyGrid>
      <Fade duration={1500}>
        <LeftText>
          <HeaderText>Design</HeaderText>
          <BodyText>
            Lorem ipsum something about design and some more interesting things.
            However, I don't want to write too many things here.
          </BodyText>
        </LeftText>
        <RightImage>
          <img src="/static/baseline-edit-24px.svg" />
        </RightImage>
      </Fade>
      <Fade duration={1500}>
        <LeftImage>
          <img src="/static/baseline-desktop_mac-24px.svg" />
        </LeftImage>
        <RightText>
          <HeaderText>Development</HeaderText>
          <BodyText>
            Lorem ipsum something about development and some more interesting
            things. However, I don't want to write too many things here.
          </BodyText>
        </RightText>
      </Fade>
      <Fade duration={1500}>
        <LeftText>
          <HeaderText>Production</HeaderText>
          <BodyText>
            Lorem ipsum something about production and some more interesting
            things. However, I don't want to write too many things here.
          </BodyText>
        </LeftText>
        <RightImage>
          <img src="/static/round-location_city-24px.svg" />
        </RightImage>
      </Fade>
      <Fade duration={1500}>
        <LeftImage>
          <img src="/static/round-local_shipping-24px.svg" />
        </LeftImage>
        <RightText>
          <HeaderText>Supply</HeaderText>
          <BodyText>
            Lorem ipsum something about supply and some more interesting things.
            However, I don't want to write too many things here.
          </BodyText>
        </RightText>
      </Fade>
    </IndexBodyGrid>
  </>
);
