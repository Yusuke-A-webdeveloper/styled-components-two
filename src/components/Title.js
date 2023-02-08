import styled, { css } from 'styled-components';

export const DefaultTitle = styled.div`
  h3 {
    font-size: 45px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  h4 {
    position: relative;
    font-size: 22px;
    text-transform: uppercase;
    margin-bottom: 20px;
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100px;
      height: 5px;
      background: var(--green);
    }
  }
`;

export const ProjectTitle = styled.div`
  h2 {
    font-size: 32px;
    color: var(--white);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const DetailTitle = styled.div`
  margin-bottom: 20px;
  letter-spacing: 1px;
  ${({ right }) =>
    right
      ? css`
          font-size: 45px;
          color: var(--header);
          text-transform: uppercase;
        `
      : css`
          font-size: 28px;
          color: var(--white);
          text-transform: capitalize;
        `}
`;

export const ServiceTitle = styled(DefaultTitle)`
  h3 {
    font-size: 25px;
    text-transform: capitalize;
  }
`;

export const AboutTitle = styled(ProjectTitle)`
  position: relative;
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  h2 {
    padding: 20px;
  }
`;

export const TeamTitle = styled(ProjectTitle)`
  text-align: center;
  h2 {
    font-size: 50px;
  }
`;

export const ContactTitle = styled(ProjectTitle)`
  text-align: center;
  h2 {
    text-transform: capitalize;
    font-size: 40px;
  }
  h3 {
    font-size: 25px;
  }
`;
