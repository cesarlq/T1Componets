'use client'
import { createContext, useContext, useState } from 'react';
 
const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [Open, setOpen] = useState<boolean>(true);

  return (
    <MenuContext.Provider value={{ setOpen, Open }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}