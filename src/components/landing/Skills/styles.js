import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  // background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 1rem 0rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 10px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Resume = styled.div`
  width: 60%;
  margin: 6rem auto;
  
  @media (max-width: 960px) {
    width: 80%;
  }
  h1 {
    font-size: 24pt;
    text-transform: uppercase;
  }
  p {
    text-align: left;
    b {
      color: #0074d9;
    }
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#aaa' : '#212121')};
  text-align: center;
  letter-spacing: -0.5px;
  font-size: 18pt;

  div {
    text-align: center;
    width: 30%;
    height: 3px;
    background: ${({ theme }) => (theme === 'dark' ? '#eee' : '#212121')};
    margin: auto;
  }
`;

export const Skill = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: space-between;
  justify-self: center;
  height: 200px;
  width: 200px;
  //border: 2px solid #EBEBEB;

  background: ${({ theme }) => (theme === 'dark' ? '#121212' : '#eee')};
  border-radius: 3px;
  margin-bottom: 2rem;
  text-align: center;
  //position: relative;
  color: #333;

  h1 {
    padding-top: 8px;
    font-weight: bold;
    font-size: 18pt;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  img {
    width: 100px;
    max-height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 0;
  }
  p {
    word-break: break-word;
    z-index: 1;
    color: ${({ theme }) => (theme === 'dark' ? '#eee' : '#121212')};
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;
