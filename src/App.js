import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getAmiibos from './redux/api';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './components/Details';
import './assets/scss/App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAmiibos());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
