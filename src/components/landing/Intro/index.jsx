import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Button, Container } from 'components/common';
import me from 'assets/illustrations/me.jpg';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>👋 Hi There! </h1>
          <h4>I’m Workfel (Johan Pujol)<br/> I’m a Frontend & Backend engineer!</h4>
          <h5>💚 TDD/ Clean architecture</h5>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={me} alt="Johan pujol" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
