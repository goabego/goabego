import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
  it('renders the "Hello World" heading', () => {
    render(<HomePage />);
    const heading = screen.getByText(/Hello World/i);
    expect(heading).toBeInTheDocument();
  });
});
