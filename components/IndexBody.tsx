import * as React from 'react';
import { BodyText } from '../styles/components/BodyText';
import { HeaderText } from '../styles/components/HeaderText';
import { IndexMainDiv } from '../styles/components/IndexMainDiv';

export const IndexBody = () => (
  <>
    <IndexMainDiv>
      <div>
        <HeaderText>Design</HeaderText>
        <BodyText>
          Lorem ipsum something about design and some more interesting things.
          However, I don't want to write too many things here.
        </BodyText>
      </div>
      <img src="/static/baseline-edit-24px.svg" />
    </IndexMainDiv>
    <IndexMainDiv>
      <img src="/static/baseline-desktop_mac-24px.svg" />
      <div>
        <HeaderText>Development</HeaderText>
        <BodyText>
          Lorem ipsum something about development and some more interesting
          things. However, I don't want to write too many things here.
        </BodyText>
      </div>
    </IndexMainDiv>
    <IndexMainDiv>
      <div>
        <HeaderText>Production</HeaderText>
        <BodyText>
          Lorem ipsum something about production and some more interesting
          things. However, I don't want to write too many things here.
        </BodyText>
      </div>
      <img src="/static/round-location_city-24px.svg" />
    </IndexMainDiv>
    <IndexMainDiv>
      <img src="/static/round-local_shipping-24px.svg" />
      <div>
        <HeaderText>Supply</HeaderText>
        <BodyText>
          Lorem ipsum something about supply and some more interesting things.
          However, I don't want to write too many things here.
        </BodyText>
      </div>
    </IndexMainDiv>
  </>
);
