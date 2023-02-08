import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { DarkmodeBtn } from './Button';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { toggleTheme, toggleMenu } = useGlobalContext();

  return (
    <Wrapper>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <div className="menu">
        <HiMenu className="menu-icon" onClick={toggleMenu} />
        <DarkmodeBtn onClick={toggleTheme}>dark mode</DarkmodeBtn>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  z-index: 10;
  .logo {
    h1 {
      color: var(--logo);
      font-size: 35px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    .menu-icon {
      font-size: 35px;
      color: var(--logo);
      margin-right: 50px;
      cursor: pointer;
      transition: 0.3s ease-out;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: 520px) {
    .menu .menu-icon {
      margin-right: 15px;
    }
  }
`;

export default Navbar;
