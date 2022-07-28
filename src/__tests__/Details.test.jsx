import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import Details from '../components/Details';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

it('Renders Detail page with proper data', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/details/00000002']}>
        <Navbar />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </Provider>,
  );

  const backButton = document.querySelector('.details-goback__text');
  fireEvent.click(backButton);
  expect(screen.getByAltText(/All amiibos/i)).toBeInTheDocument();
});
