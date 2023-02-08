import styled from 'styled-components';
import { socialList } from '../data';

const SocialIcons = () => {
  return (
    <Wrapper>
      {socialList.map((list) => {
        const { id, icon, href } = list;
        return (
          <a href={href} key={id}>
            {icon}
          </a>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  svg {
    cursor: pointer;
    font-size: 28px;
    margin: 10px;
    color: var(--logo);
    transition: 0.3s ease-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default SocialIcons;
