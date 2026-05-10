import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { RELIGIONS, FONTS } from '../data/religions.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

const ITEMS = [
  { religionId: 'islam', verse: 'Indeed, with hardship comes ease', cite: "QURʼAN · 94:6" },
  { religionId: 'hinduism', verse: 'You have a right to action, never to its fruits', cite: 'GITA · 2:47' },
  { religionId: 'sikhism', verse: 'There is but One, the eternal truth', cite: 'JAPJI · 1' },
  { religionId: 'christianity', verse: 'Be still, and know that I am God', cite: 'PSALM · 46:10' },
  { religionId: 'islam', verse: 'My mercy embraces all things', cite: "QURʼAN · 7:156" },
  { religionId: 'hinduism', verse: 'The soul is neither born nor does it die', cite: 'GITA · 2:20' },
  { religionId: 'sikhism', verse: 'Where there is forgiveness, there is the abode of God', cite: 'KABIR' },
  { religionId: 'christianity', verse: 'Love is patient, love is kind', cite: '1 COR · 13:4' },
];

export default function VerseTicker() {
  const { theme } = useApp();
  const { isMobile } = useResponsive();
  const loop = [...ITEMS, ...ITEMS];

  const verseFontSize = isMobile ? 20 : 26;
  const itemGap = isMobile ? 10 : 16;
  const trackGap = isMobile ? 40 : 64;
  const glyphSize = isMobile ? 16 : 20;
  const citeFontSize = isMobile ? 9 : 10;

  return (
    <div style={{
      borderTop: `1px solid ${theme.line}`,
      borderBottom: `1px solid ${theme.line}`,
      background: theme.bg,
      overflow: 'hidden',
      position: 'relative',
      padding: '24px 0',
    }}>
      <div className="dd-ticker-track" style={{
        display: 'flex',
        gap: trackGap,
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {loop.map((it, i) => {
          const r = RELIGIONS[it.religionId];
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: itemGap, flexShrink: 0, whiteSpace: 'nowrap' }}>
              <div style={{ color: r.accent, flexShrink: 0 }}><r.Glyph size={glyphSize} color={r.accent} /></div>
              <div style={{
                fontFamily: FONTS.display, fontSize: verseFontSize, fontStyle: 'italic',
                fontWeight: 500, color: theme.fg, letterSpacing: -0.3, whiteSpace: 'nowrap',
              }}>"{it.verse}"</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: citeFontSize, letterSpacing: 1.8, color: theme.muted, whiteSpace: 'nowrap' }}>{it.cite}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
