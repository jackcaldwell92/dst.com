import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { Header } from '../components/Header';
import { IndexBody } from '../components/IndexBody';
import { Layout } from '../components/Layout';
import { Button } from '../styles/components/Button';
import { HeaderDiv } from '../styles/components/HeaderDiv';
import { HeaderImage } from '../styles/components/HeaderImage';
import { HeaderText } from '../styles/components/HeaderText';
import { HeaderTextBody } from '../styles/components/HeaderTextBody';

export default class extends React.Component<any, any> {
  private mainRef: any;

  public constructor(props: any) {
    super(props);
    this.mainRef = React.createRef();
    this.homeRef = React.createRef();
  }

  public handleFindOutMoreButtonClicked = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: this.mainRef.current.offsetTop,
    });
  };

  public handleNavigation = (navigation: string) => {
    console.log('handling navigation to', navigation);
    switch (navigation) {
      case 'home':
        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        });
    }
  };

  public render() {
    return (
      <Layout>
        <>
          <HeaderImage src="/static/header.jpeg" />
          <HeaderDiv>
            <Fade>
              <HeaderText>From concept,</HeaderText>
            </Fade>
            <Fade duration={2000}>
              <HeaderText>to complete.</HeaderText>
            </Fade>
            <Fade duration={3000}>
              <HeaderTextBody>
                Fully factored garment production.
              </HeaderTextBody>
            </Fade>
            <Fade bottom={true} duration={1500}>
              <Button onClick={() => this.handleFindOutMoreButtonClicked()}>
                Find out more
              </Button>
            </Fade>
          </HeaderDiv>
          <Header handleNavigation={this.handleNavigation} />
          <div ref={this.mainRef}>
            <IndexBody />
          </div>
        </>
      </Layout>
    );
  }
}
