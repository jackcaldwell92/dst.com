import * as React from 'react';

import { BodyText } from '../styles/components/BodyText';
import { HeaderText } from '../styles/components/HeaderText';
import { IndexBodyGrid } from '../styles/components/IndexBodyGrid';
import { LeftImage } from '../styles/components/LeftImage';
import { LeftText } from '../styles/components/LeftText';
import { RightImage } from '../styles/components/RightImage';
import { RightText } from '../styles/components/RightText';

export const IndexBody = () => (
  <>
    <IndexBodyGrid>
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
    </IndexBodyGrid>
  </>
);
