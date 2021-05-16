import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyContainer from './HeyContainer';


describe('RickAndMortyContainer', () => {
  it('renders a list of characters to the page', async () => {
    render(<HeyContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
