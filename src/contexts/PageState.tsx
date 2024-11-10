import { createContext, useState, ReactNode } from 'react';
import { PageStateContext as ContextType, PageState } from '../types';

export const PageStateContext = createContext<ContextType | undefined>(
  undefined,
);

type PageStateProviderProps = {
  children: ReactNode;
};
export const PageStateProvider = ({ children }: PageStateProviderProps) => {
  const [pageState, setPageState] = useState<PageState>('login');

  const value = {
    pageState,
    setPageState,
  };

  return (
    <PageStateContext.Provider value={value}>
      {children}
    </PageStateContext.Provider>
  );
};
