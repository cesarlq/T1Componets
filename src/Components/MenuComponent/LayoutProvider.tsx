// LayoutProvider.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Tipos para el estado del layout
interface LayoutState {
  sidebarOpen: boolean;
  sidebarReduce: boolean;
}

// Acciones posibles
type LayoutAction = 
  | { type: 'TOGGLE_SIDEBAR_OPEN' }
  | { type: 'SET_SIDEBAR_OPEN'; payload: boolean }
  | { type: 'TOGGLE_SIDEBAR_REDUCE' }
  | { type: 'SET_SIDEBAR_REDUCE'; payload: boolean };

// Estado inicial
const initialState: LayoutState = {
  sidebarOpen: false,
  sidebarReduce: false,
};

// Reducer
function layoutReducer(state: LayoutState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR_OPEN':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'SET_SIDEBAR_OPEN':
      return { ...state, sidebarOpen: action.payload };
    case 'TOGGLE_SIDEBAR_REDUCE':
      return { ...state, sidebarReduce: !state.sidebarReduce };
    case 'SET_SIDEBAR_REDUCE':
      return { ...state, sidebarReduce: action.payload };
    default:
      return state;
  }
}

// Context
interface LayoutContextValue {
  state: LayoutState;
  // Funciones de control
  toggleSidebarOpen: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  toggleSidebarReduce: () => void;
  setSidebarReduce: (isReduced: boolean) => void;
}

const LayoutContext = createContext<LayoutContextValue | null>(null);

// Provider component
interface LayoutProviderProps {
  children: ReactNode;
  initialSidebarOpen?: boolean;
  initialSidebarReduce?: boolean;
}

export function LayoutProvider({ 
  children, 
  initialSidebarOpen = false,
  initialSidebarReduce = false 
}: LayoutProviderProps) {
  const [state, dispatch] = useReducer(layoutReducer, {
    sidebarOpen: initialSidebarOpen,
    sidebarReduce: initialSidebarReduce,
  });

  const contextValue: LayoutContextValue = {
    state,
    toggleSidebarOpen: () => dispatch({ type: 'TOGGLE_SIDEBAR_OPEN' }),
    setSidebarOpen: (isOpen: boolean) => dispatch({ type: 'SET_SIDEBAR_OPEN', payload: isOpen }),
    toggleSidebarReduce: () => dispatch({ type: 'TOGGLE_SIDEBAR_REDUCE' }),
    setSidebarReduce: (isReduced: boolean) => dispatch({ type: 'SET_SIDEBAR_REDUCE', payload: isReduced }),
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
}

// Hook para usar el contexto (obligatorio)
export function useLayout(): LayoutContextValue {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

// Hook opcional que no lanza error si no hay provider
export function useLayoutOptional(): LayoutContextValue | null {
  return useContext(LayoutContext);
}