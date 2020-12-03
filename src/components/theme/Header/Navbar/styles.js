import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
  div.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 32px;
    img {
      margin: 0;
      filter: brightness(0) invert(${({ theme }) => (theme === 'light' ? 0 : 1)});
    }
  }
`;
