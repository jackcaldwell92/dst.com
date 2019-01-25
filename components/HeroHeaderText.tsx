import { throttle } from 'lodash';
import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { Button } from '../styles/components/Button';
import { HeaderLogo } from '../styles/components/HeaderLogo';
import { HeaderText } from '../styles/components/HeaderText';
import { HeaderTextBody } from '../styles/components/HeaderTextBody';
import { HeroHeaderTextDiv } from '../styles/components/HeroHeaderTextDiv';

export class HeroHeaderText extends React.Component<any, any> {
  public state = {
    opacity: 1,
    translateAmount: 0,
  };

  public componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100));
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public handleScroll = () => {
    if (window.scrollY < 500) {
      this.setState({
        headerOpacity: this.getHeaderOpactity(
          window.innerHeight,
          window.scrollY,
        ),
      });
      console.log('header opacity: ', this.state.opacity);
      this.setState({
        opacity: this.getHeaderOpactity(window.innerHeight, window.scrollY),
        translateAmount: this.getTranslateAmount(window.scrollY),
      });
    }
  };

  public getTranslateAmount = (scrollAmount: number) => {
    if (scrollAmount > 500) {
      return 125;
    } else {
      return scrollAmount / 4;
    }
  };

  public getHeaderOpactity = (windowHeight: number, scrollAmount: number) => {
    const opacity = windowHeight / scrollAmount / 10;
    return opacity;
  };

  public render() {
    return (
      <HeroHeaderTextDiv
        onScroll={this.handleScroll}
        opacity={this.state.opacity}
        translateAmount={this.state.translateAmount}
      >
        <Fade delay={2000}>
          <HeaderLogo src="/static/logo.png" />
        </Fade>
        <Fade>
          <HeaderText>From concept</HeaderText>
        </Fade>
        <Fade duration={2000}>
          <HeaderText>to complete</HeaderText>
        </Fade>
        <Fade duration={3000}>
          <HeaderTextBody>Fully factored garment production</HeaderTextBody>
        </Fade>
        <Fade bottom={true} duration={1500}>
          <Button onClick={() => this.props.handleFindOutMoreButtonClicked()}>
            Find out more
          </Button>
        </Fade>
      </HeroHeaderTextDiv>
    );
  }
}
