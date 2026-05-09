import React from 'react';
import { FONTS } from '../data/religions.jsx';

export default function SectionLabel({ children, accent, theme }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FONTS.mono,
      fontSize: 11,
      letterSpacing: 2.4,
      color: theme.muted,
    }}>
      <span style={{ width: 24, height: 1, background: accent, opacity: 0.6, display: 'block', flexShrink: 0 }} />
      {children}
    </div>
  );
}
