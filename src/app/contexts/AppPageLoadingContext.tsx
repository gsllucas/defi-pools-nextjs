import { createContext, useContext, useState } from 'react';
import { ChildrenProps } from '../interfaces/children-props';

const AppPageLoadingContext = createContext<any>({});

function AppPageLoadingProvider({ children }: ChildrenProps) {
  const [appPageLoading, setAppPageLoading] = useState(true);

  return (
    <AppPageLoadingContext.Provider
      value={{ appPageLoading, setAppPageLoading }}
    >
      {children}
    </AppPageLoadingContext.Provider>
  );
}

function useAppPageLoadingContext() {
  const context = useContext(AppPageLoadingContext);
  return context;
}

export { AppPageLoadingProvider, useAppPageLoadingContext };
