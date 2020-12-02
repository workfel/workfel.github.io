import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Resume, Skill, SkillsWrapper, Title, Wrapper } from './styles';
import angular from '../../../assets/illustrations/angular.svg';
import js from '../../../assets/illustrations/js.svg';
import nest from '../../../assets/illustrations/nest.svg';
import tdd from '../../../assets/illustrations/tdd.svg';
import front from '../../../assets/illustrations/front-end.svg';
import clean from '../../../assets/illustrations/clean.svg';
import { Details } from '../MeDetail/styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const calculateAge = birthday => {
    const date1 = new Date(birthday);
    const date2 = new Date();
    const yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  };
  const year = calculateAge('2010');
  return (
    <Wrapper id="about">
      <Resume>
        <h1> Resume </h1>
        <p>
          I am a <b>Software craftsmanship</b> specialized in Backend / Frontend development of mobile & web
          applications since{' '}<b>{year} years </b>.
        </p>
        <p>
          I made my first website in 2009 ( HTML/CSS ), & fell in love with web development. Since then, I never stopped
          to learn new things.
        </p>
        <p>
          Over the years, i tried new things like IOT & mobile projects. After many projects i really found my way in web
          development for crafting mobile & desktops apps. I love learning new things, frameworks, languages, design pattern.
        </p>

        <p>
          I care about <b>best practice</b>, responsiveness, performance, maintainability.
        </p>
        <p>
          In dark side, i care about clean code. I fell love in <b>Clean Architecture</b> & <b>TDD</b> ( Test Driven
          Development ).
        </p>
      </Resume>
      <Title theme={theme}>
        THINGS I LOVE TO WORKS WITH
        <div></div>
      </Title>
      <SkillsWrapper as={Container}>
        <Skill theme={theme}>
          <h1>Javascript</h1>
          <img src={js} alt="js" />
          <p>Typescript / ES**</p>
        </Skill>
        <Skill theme={theme}>
          <h1>Angular</h1>
          <img src={angular} alt="Angular" />
          <p>Mobile / Desktop ..or both </p>
        </Skill>
        <Skill theme={theme}>
          <h1>Nest</h1>
          <img src={nest} alt="Nestjs" />
          <p> App / Microservice </p>
        </Skill>
        <Skill theme={theme}>
          <h1>Tdd</h1>
          <img src={tdd} alt="TDD" />
          <p>Test driven development</p>
        </Skill>
        <Skill theme={theme}>
          <h1>Frontend</h1>
          <img src={front} alt="Front end" />
          <p>React / Vue / Ionic</p>
        </Skill>
        <Skill theme={theme}>
          <h1>Clean Archi</h1>
          <img src={clean} alt="Clean archi" />
          <p>Best practices</p>
        </Skill>
      </SkillsWrapper>
    </Wrapper>
  );
};
