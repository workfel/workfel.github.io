import React, { useContext } from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ContactItem, Details, Thumbnail, Wrapper } from './styles';
import { ThemeContext } from '../../../providers/ThemeProvider';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="contact">
      <Details>
        <a href="mailto:workfel@gmail.com">
          <ContactItem theme={theme}>
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
            <div>
              <h1>Email me</h1>
              <h2>workfel@gmail.com</h2>
            </div>
          </ContactItem>
        </a>
        <a href="https://twitter.com/JohanPujol">
          <ContactItem theme={theme}>
            <div className="icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </div>
            <div>
              <h1>Tweet me</h1>
              <h2>@JohanPujol</h2>
            </div>
          </ContactItem>
        </a>
        <a href="https://github.com/workfel">
          <ContactItem theme={theme}>
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
            <div>
              <h1>Git me</h1>
              <h2>@workfel</h2>
            </div>
          </ContactItem>
        </a>
        <a href="https://www.linkedin.com/in/johan-pujol-5428b86a/">
          <ContactItem theme={theme}>
            <div className="icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
            <div>
              <h1>Link me</h1>
              <h2>Johan pujol</h2>
            </div>
          </ContactItem>
        </a>
      </Details>
      <Thumbnail>
        <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </Wrapper>
  );
};
