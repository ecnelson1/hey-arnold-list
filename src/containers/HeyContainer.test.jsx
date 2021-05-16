import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyContainer from './HeyContainer';


describe('HeyContainer', () => {
  it('renders a list of characters to the page', async () => {
    render(<HeyContainer />);

    screen.getByText('LOADING...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
