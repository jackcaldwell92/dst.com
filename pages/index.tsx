import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Services } from '../components/Services';
import { Button } from '../styles/components/Button';
import { FadeInOut } from '../styles/components/FadeInOut';
import { HeaderDiv } from '../styles/components/HeaderDiv';
import { HeaderImage } from '../styles/components/HeaderImage';
import { HeaderLogo } from '../styles/components/HeaderLogo';
import { HeaderText } from '../styles/components/HeaderText';
import { HeaderTextBody } from '../styles/components/HeaderTextBody';

export default class extends React.Component<any, any> {
  private servicesRef: any;
  private aboutRef: any;
  private contactRef: any;

  public constructor(props: any) {
    super(props);
    this.servicesRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
    this.state = {
      headerOpacity: 1,
      headerTextVisible: false,
    };
  }

  // public componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  public handleScroll = () => {
    this.setState({
      headerOpacity: this.getHeaderOpactity(window.innerHeight, window.scrollY),
    });
    console.log('header opacity: ', this.state.headerOpacity);
  };

  public getHeaderOpactity = (windowHeight: number, scrollAmount: number) => {
    // const opacity = windowHeight / scrollAmount / 10;
    // return opacity;
  };

  public handleFindOutMoreButtonClicked = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: this.servicesRef.current.offsetTop,
    });
  };

  public handleNavigation = (navigation: string) => {
    switch (navigation) {
      case 'home':
        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        });
        return;
      case 'services':
        window.scrollTo({
          behavior: 'smooth',
          top: this.servicesRef.current.offsetTop,
        });
        return;
      case 'about':
        window.scrollTo({
          behavior: 'smooth',
          top: this.aboutRef.current.offsetTop,
        });
        return;
      case 'contact':
        window.scrollTo({
          behavior: 'smooth',
          top: this.contactRef.current.offsetTop,
        });
      default:
        return;
    }
  };

  public render() {
    return (
      <Layout>
        <>
          <HeaderImage src="/static/header.jpeg" />
          <HeaderDiv opacity={this.state.headerOpacity}>
            <>
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
                <HeaderTextBody>
                  Fully factored garment production
                </HeaderTextBody>
              </Fade>
              <Fade bottom={true} duration={1500}>
                <Button onClick={() => this.handleFindOutMoreButtonClicked()}>
                  Find out more
                </Button>
              </Fade>
            </>
          </HeaderDiv>

          <Header handleNavigation={this.handleNavigation} />
          <div ref={this.servicesRef}>
            <Services />
          </div>
          <div ref={this.aboutRef}>
            <About />
          </div>
          <div ref={this.contactRef}>
            <Contact />
          </div>
        </>
      </Layout>
    );
  }
}
