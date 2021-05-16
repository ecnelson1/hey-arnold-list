import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsContainer from './DetailsContainer';



describe('RickAndMortyContainer', () => {
  it('renders a list of characters to the page', async () => {
    render(<DetailsContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findBy('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
