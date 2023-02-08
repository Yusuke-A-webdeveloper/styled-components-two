import styled, { css } from 'styled-components';

export const DarkmodeBtn = styled.button`
  display: inline-block;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 520px) {
    font-size: 16px;
    padding: 5px 5px;
  }
`;

export const BasicInput = styled.input.attrs((props) => {
  return { type: props.type || 'text' };
})`
  width: 100%;
  padding: 5px 10px;
  margin: 10px;
  font-size: 18px;
  background: transparent;
  ${({ type }) => {
    return (
      type === 'submit' &&
      css`
        max-width: 100px;
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px 10px;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
          opacity: 0.5;
        }
      `
    );
  }}
`;
