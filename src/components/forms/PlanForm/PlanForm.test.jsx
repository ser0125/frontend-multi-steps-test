import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { useForm } from '../../../FormContext';
import PlanForm from './PlanForm';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import MockTheme from '../../../tests/MockTheme';

// Setup mock
beforeEach(() => {
  vi.mock('../../../FormContext', () => {
    return {
      useForm: vi.fn(),
    };
  });

  vi.mock('react-router-dom', async () => {
    const actualNav = await vi.importActual('react-router-dom');
    return {
      ...actualNav,
      useNavigate: vi.fn(),
    };
  });
});

describe('PlanForm', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('renders title from props', () => {
    useForm.mockImplementation(() => ({
      state: {
        plan: {
          billing: 'Monthly',
          subscription: 'Pro',
          cost: 9,
        },
      },
      dispatch: vi.fn(),
    }));
    const routes = [
      {
        path: '/plan',
        element: <PlanForm />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/plan'],
      initialIndex: 0,
    });

    const { getByTestId } = render(
      <MockTheme>
        <RouterProvider router={router} />
      </MockTheme>,
    );
    expect(getByTestId('custom-card-container-Pro')).toHaveClass('Pro-selected');
  });
});
