import React, { createContext } from 'react';

const initialState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  plan: {
    billing: 'Monthly',
    subscription: 'Arcade',
  },
};

const FormContext = createContext('');

function formReducer(state, action) {
  switch (action.type) {
    case 'storePersonalInfo': {
      return { personalInfo: { name: action.payload.name, email: action.payload.email, phone: action.payload.phone } };
    }
    case 'storePlanInfo': {
      return { plan: { billing: action.payload.billing, subscription: action.payload.subscription } };
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
