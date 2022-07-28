import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('Renders Navbar component', () => {
  const tree = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
