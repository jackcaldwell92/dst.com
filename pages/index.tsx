import * as React from 'react';

import { IndexBody } from '../components/IndexBody';
import { Layout } from '../components/Layout';
import { Button } from '../styles/components/Button';
import { HeaderDiv } from '../styles/components/HeaderDiv';
import { HeaderImage } from '../styles/components/HeaderImage';
import { HeaderText } from '../styles/components/HeaderText';
import { HeaderTextBody } from '../styles/components/HeaderTextBody';

export default class extends React.Component<any, any> {
  private main: React.RefObject<{}>;

  public constructor(props: any) {
    super(props);
    this.main = React.createRef();
  }

  public handleFindOutMoreButtonClicked = () => {
    console.log('Am I scrolling?');
    window.scrollTo({
      behavior: 'smooth',
      top: this.main.current,
    });
  };

  public render() {
    return (
      <Layout>
        <>
          <HeaderImage src="/static/header.jpeg" />
          <HeaderDiv>
            <div>
              <HeaderText>From concept,</HeaderText>
              <HeaderText>to complete.</HeaderText>
              <HeaderTextBody>
                Fully factored garment production.
              </HeaderTextBody>
            </div>
            <Button onClick={() => this.handleFindOutMoreButtonClicked()}>
              Find out more
            </Button>
          </HeaderDiv>
          <div ref={() => 'main'}>
            <IndexBody />
          </div>
        </>
      </Layout>
    );
  }
}
