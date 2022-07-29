import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import App from '../App';

it('Renders Detail page with proper data', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  waitFor(() => {
    const seeDetails = screen.getByTestId('00000002');
    fireEvent.click(seeDetails);
    const text = screen.findByAltText(/Mario/i);
    expect(text).toBeInTheDocument();
  });
});
