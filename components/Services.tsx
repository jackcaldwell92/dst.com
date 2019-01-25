import * as React from 'react';
import { InViewListener } from 'react-enter-view';
import Fade from 'react-reveal/Fade';

import { BodyText } from '../styles/components/BodyText';
import { HeaderText } from '../styles/components/HeaderText';
import { IndexBodyGrid } from '../styles/components/IndexBodyGrid';
import { LeftImage } from '../styles/components/LeftImage';
import { LeftText } from '../styles/components/LeftText';
import { RightImage } from '../styles/components/RightImage';
import { RightText } from '../styles/components/RightText';

export const Services = () => (
  <>
    <IndexBodyGrid>
      <Fade>
        <LeftText>
          <InViewListener onEnterView={() => console.log('entered view')}>
            <HeaderText>
              <a style={{ textDecoration: 'none', color: '#f8f8f8' }} href="#">
                Design
              </a>
            </HeaderText>
          </InViewListener>
          <BodyText>
            Whether you have designs for your product, or it is simply a
            concept. We have the expertise to ensure that its potential is
            reached.
          </BodyText>
        </LeftText>
      </Fade>
      <Fade>
        <RightImage>
          <img src="/static/baseline-edit-24px.svg" />
        </RightImage>
      </Fade>
      <Fade>
        <LeftImage>
          <img src="/static/baseline-desktop_mac-24px.svg" />
        </LeftImage>
      </Fade>
      <Fade>
        <RightText>
          <HeaderText>Development</HeaderText>
          <BodyText>
            From material selection and sourcing, to pattern creation, we
            cantake care of everything required to your product to manufacture.
          </BodyText>
        </RightText>
      </Fade>
      <Fade>
        <LeftText>
          <HeaderText>Production</HeaderText>
          <BodyText>
            With connections to factories and manufacturers around the world, we
            have the connections needed to get your product to market,
            regardless of the scale of your needs.
          </BodyText>
        </LeftText>
      </Fade>
      <Fade>
        <RightImage>
          <img src="/static/round-location_city-24px.svg" />
        </RightImage>
      </Fade>
      <Fade>
        <LeftImage>
          <img src="/static/round-local_shipping-24px.svg" />
        </LeftImage>
      </Fade>
      <Fade>
        <RightText>
          <HeaderText>Supply</HeaderText>
          <BodyText>
            In addition to fully factored garment product, we are also able to
            offer stock holding services. From our warehouse, located in
            Manchester, UK, we can supply your stock as you need it.
          </BodyText>
        </RightText>
      </Fade>
    </IndexBodyGrid>
  </>
);
