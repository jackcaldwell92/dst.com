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
  }

  public handleFindOutMoreButtonClicked = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: this.mainRef.current.offsetTop,
    });
  };

  public render() {
    return (
      <Layout>
        <>
          <HeaderImage src="/static/header.jpeg" />
          <HeaderDiv>
            <HeaderText>From concept,</HeaderText>
            <HeaderText>to complete.</HeaderText>
            <HeaderTextBody>Fully factored garment production.</HeaderTextBody>
            <Button onClick={() => this.handleFindOutMoreButtonClicked()}>
              Find out more
            </Button>
          </HeaderDiv>
          <Header />
          <div ref={this.mainRef}>
            <IndexBody />
          </div>
        </>
      </Layout>
    );
  }
}
