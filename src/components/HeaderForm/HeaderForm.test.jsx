import { render, screen } from '@testing-library/react';
import HeaderForm from './HeaderForm';

describe('HeaderForm', () => {
  it('renders title from props', () => {
    const { getByText } = render(<HeaderForm title="React" description={'React testing'} />);
    expect(getByText('React')).toBeTruthy();
  });
});
