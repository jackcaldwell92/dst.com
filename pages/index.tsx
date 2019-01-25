import * as React from 'react';
import Fade from 'react-reveal/Fade';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { HeroHeaderText } from '../components/HeroHeaderText';
import { Layout } from '../components/Layout';
import { Services } from '../components/Services';
import { Button } from '../styles/components/Button';
import { HeaderDiv } from '../styles/components/HeaderDiv';
import { HeaderImage } from '../styles/components/HeaderImage';

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
      headerTextVisible: false,
    };
  }

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
          <HeaderDiv>
            <HeroHeaderText
              handleFindOutMoreButtonClicked={
                this.handleFindOutMoreButtonClicked
              }
            />
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
