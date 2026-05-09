import React, { createContext, useContext, useState } from 'react';
import { PALETTES, RELIGIONS } from '../data/religions.jsx';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [religionId, setReligionId] = useState('islam');
  const [paletteId, setPaletteId] = useState('bone');

  const theme = PALETTES[paletteId];
  const religion = RELIGIONS[religionId];
  const accent = religion.accent;

  return (
    <AppContext.Provider value={{ theme, accent, religionId, religion, paletteId, setReligionId, setPaletteId }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
