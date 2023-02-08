import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import SingleProject from './components/SingleProject';
import SharedLayout from './SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="project/:projectId" element={<SingleProject />} />
          <Route path="*" element={<Error />} />{' '}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
