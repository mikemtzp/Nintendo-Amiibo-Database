import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Amiibo from '../components/Amiibo';

const amiiboData = {
  name: 'Mario',
  id: '00000002',
  image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
};

const categoryRender = () => (
  <BrowserRouter>
    <Amiibo
      name={amiiboData.name}
      id={amiiboData.id}
      image={amiiboData.image}
    />
  </BrowserRouter>
);

it('Category renders information correctly', () => {
  render(
    <Amiibo
      name={amiiboData.name}
      id={amiiboData.id}
      image={amiiboData.image}
    />,
    { wrapper: categoryRender },
  );
  expect(screen.getByText('Mario')).toBeInTheDocument();
});
