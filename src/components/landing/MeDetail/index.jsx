import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Button, Container } from 'components/common';
import dev from 'assets/illustrations/evolution.svg';
import { DefaultWrapper, Details, MeDatailsWrapper, Thumbnail } from './styles';

export const MeDetail = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <DefaultWrapper id="about">
      <MeDatailsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="evolution" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>I am Johan Pujol, or on socials networks as workfel. I live in south of France (near Toulouse).</p>

          <p>
            When i'm not coding, i'm Swim, Bike, Run ( Triathlon ) & Skiing <b>ADDICT</b>.
          </p>
          <p>&nbsp;</p>
          <p>
            Since 2017 i'm working at{' '}
            <a href="https://digikare.com/">
              <b>DIGIKARE</b>
            </a>{' '}
            as fullstack engineer, we develop digital app can enhance patient care.
          </p>
          <Button as={AnchorLink} href="#contact">
            We are hiring 🥳
          </Button>
        </Details>
      </MeDatailsWrapper>
    </DefaultWrapper>
  );
};
