import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import HiddenMenu from './components/HiddenMenu';
import { ThemeProvider } from 'styled-components';
import { BaseTheme, DarkTheme, Container } from './components/Theme';
import { useGlobalContext } from './context';

const SharedLayout = () => {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme ? DarkTheme : BaseTheme}>
      <Container>
        <HiddenMenu />
        <Navbar />
        <section>
          <Outlet />
        </section>
      </Container>
    </ThemeProvider>
  );
};

export default SharedLayout;
