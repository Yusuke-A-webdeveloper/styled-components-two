import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const HiddenMenu = () => {
  const { menu, toggleMenu } = useGlobalContext();

  return (
    <Wrapper className={menu ? 'active' : null}>
      <ul>
        <Link to="/" onClick={toggleMenu}>
          <AiFillHome />
          Home
        </Link>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100%;
  background: #222;
  transition: 0.5s ease-out;
  z-index: 15;
  &.active {
    left: 0;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: inline-block;
      font-size: 20px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 8px 15px;
      color: var(--white);
      transition: 0.3s ease-out;
      &:hover {
        opacity: 0.5;
      }
      svg {
        position: relative;
        top: 3px;
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 700px) {
    left: -50%;
    width: 50%;
  }
`;

export default HiddenMenu;
