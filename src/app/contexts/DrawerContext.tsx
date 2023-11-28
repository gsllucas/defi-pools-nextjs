import { ReactNode, createContext, useContext, useState } from 'react';
import { ChildrenProps } from '../interfaces/children-props';
import { PoolObject } from '../interfaces/pool-object';

const DrawerContext = createContext<any>(null);

const DrawerProvider = ({ children }: ChildrenProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerChildren, setDrawerChildren] = useState<ReactNode>();

  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        drawerChildren,
        setDrawerChildren,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

function useDrawerContext() {
  const context = useContext(DrawerContext);
  return context;
}

export { DrawerProvider, useDrawerContext };
