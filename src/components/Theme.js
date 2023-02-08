import styled from 'styled-components';

export const BaseTheme = {
  background: '#fff',
  headerColor: '#025669',
  headerColor2: '#2A6478',
  headerColor3: '#8F8F8F',
  buttonColor: '#fff',
  buttonBg: '#025669',
  paragraph: '#909090',
  borderColor: '1px solid #909090',
};

export const DarkTheme = {
  background: '#222',
  headerColor: '#3B83BD',
  headerColor2: '#3B83BD',
  headerColor3: '#BDECB6',
  buttonColor: '#fff',
  buttonBg: '#3B83BD',
  paragraph: '#fff',
  borderColor: '1px solid #fff',
};

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.paragraph};
  h2 {
    color: ${(props) => props.theme.headerColor};
  }
  h3 {
    color: ${(props) => props.theme.headerColor2};
  }
  h4 {
    color: ${(props) => props.theme.headerColor3};
  }
  button {
    color: ${(props) => props.theme.buttonColor};
    background: ${(props) => props.theme.buttonBg};
  }
  p {
    color: ${(props) => props.theme.paragraph};
  }
  input,
  textarea {
    color: ${(props) => props.theme.paragraph};
    border: ${(props) => props.theme.borderColor};
  }
`;
