import React, { createContext } from 'react';

const initialState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  plan: {
    billing: '',
    subscription: '',
    cost: 0,
  },
  addons: [
    {
      name: 'Online service',
      cost: 1,
      description: 'Access to multiplayer games',
      checked: true,
    },
    {
      name: 'Larger storage',
      cost: 2,
      description: 'Extra 1TB of cloud save',
      checked: true,
    },
    {
      name: 'Customizable profile',
      cost: 2,
      description: 'Custom theme on your profile',
      checked: false,
    },
  ],
  steps: [
    {
      name: 'STEP 1',
      description: 'YOUR INFO',
      path: '/',
      disabled: false,
    },
    {
      name: 'STEP 2',
      description: 'SELECT PLAN',
      path: '/plan',
      disabled: true,
    },
    {
      name: 'STEP 3',
      description: 'ADD-ONS',
      path: '/addons',
      disabled: true,
    },
    {
      name: 'STEP 4',
      description: 'SUMMARY',
      path: '/summary',
      disabled: true,
    },
  ],
};

const FormContext = createContext('');

function formReducer(state, action) {
  switch (action.type) {
    case 'storePersonalInfo': {
      return {
        ...state,
        personalInfo: { name: action.payload.name, email: action.payload.email, phone: action.payload.phone },
        steps: [
          ...state.steps.map((step) => {
            return step.name === 'STEP 2' ? { ...step, disabled: false } : { ...step };
          }),
        ],
      };
    }
    case 'storePlanInfo': {
      return {
        ...state,
        plan: { billing: action.payload.billing, subscription: action.payload.subscription, cost: action.payload.cost },
        addons: [
          ...(state.plan.billing && action.payload.billing !== state.plan.billing
            ? state.addons.map((add) => {
                return { ...add, cost: action.payload.billing === 'Yearly' ? add.cost * 10 : add.cost / 10 };
              })
            : state.addons),
        ],
        steps: [
          ...state.steps.map((step) => {
            return step.name === 'STEP 3' || step.name === 'STEP 4' ? { ...step, disabled: false } : { ...step };
          }),
        ],
      };
    }
    case 'storeAddons': {
      return {
        ...state,
        addons: [...action.payload.addonsList],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(formReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

function useForm() {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a FormContext');
  }
  return context;
}

export { FormProvider, useForm };
