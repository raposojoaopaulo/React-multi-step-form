import React, { createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type Action = { 
  type: FormActions,
  payload: any
 };

 type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
 };

 type FormProvidersProps = {
  children: React.ReactNode;
};

const initialState: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

const FormContext = createContext<ContextType | undefined>(undefined);

enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
};

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
    }
};

const FormProvider = ({ children }: FormProvidersProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const value = { state, dispatch };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

export { FormProvider, useForm, FormActions };