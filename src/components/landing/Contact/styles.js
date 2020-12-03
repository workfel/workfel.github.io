import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    order: 1;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    height: 80px;
    width: 250px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  margin-bottom: 2rem;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => (theme === 'light' ? '#eee' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#eee')};
  border-radius: 4px;

  div.icon {
    width: 80px;
    display: flex;
    justify-content: center;
  }
  div {
    width: 100%;
    margin-left: 16px;
    h1 {
      font-size: 18pt;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 12pt;
      margin: 0;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
