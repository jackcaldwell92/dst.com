import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { Button } from '../styles/components/Button';
import { CenterDiv } from '../styles/components/CenterDiv';
import { ContactDiv } from '../styles/components/ContactDiv';
import { MailTo } from '../styles/components/MailTo';
import { WideBodyText } from '../styles/components/WideBodyText';

export const Contact = () => (
  <ContactDiv>
    <CenterDiv>
      <Fade>
        <Button>
          <MailTo href="mailto:steve@prtextiles.com">Contact Us</MailTo>
        </Button>
      </Fade>
      <Fade>
        <WideBodyText>
          If you would like to get in touch, please click the button above.
          Alternatively, you can message us at steve@prtextiles.com
        </WideBodyText>
      </Fade>
    </CenterDiv>
  </ContactDiv>
);
