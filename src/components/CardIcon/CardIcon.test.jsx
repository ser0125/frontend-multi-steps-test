import { render, screen } from '@testing-library/react';
import CardIcon from './CardIcon';
import { vi } from 'vitest';

describe('CardIcon', () => {
  it('renders title from props', () => {
    const { getByText } = render(<CardIcon cost={4} handlePlanSelect={() => {}} />);
    expect(getByText('$4/mo')).toBeTruthy();
  });

  it('should call mock function after clicking the icon container', () => {
    const mockCallback = vi.fn();
    const { getByTestId } = render(<CardIcon name={'Advanced'} cost={4} handlePlanSelect={mockCallback} />);
    const button = getByTestId('custom-card-container-Advanced');
    button.click();
    expect(mockCallback).toHaveBeenCalled();
  });
});
