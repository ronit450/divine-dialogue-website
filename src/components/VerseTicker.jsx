import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { RELIGIONS, FONTS } from '../data/religions.jsx';

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
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      borderTop: `1px solid ${theme.line}`,
      borderBottom: `1px solid ${theme.line}`,
      background: theme.bg,
      overflow: 'hidden', position: 'relative',
      padding: '24px 0',
    }}>
      <div className="dd-ticker-track" style={{
        display: 'flex', gap: 64, whiteSpace: 'nowrap', width: 'max-content',
      }}>
        {loop.map((it, i) => {
          const r = RELIGIONS[it.religionId];
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
              <div style={{ color: r.accent }}><r.Glyph size={20} color={r.accent} /></div>
              <div style={{
                fontFamily: FONTS.display, fontSize: 26, fontStyle: 'italic',
                fontWeight: 500, color: theme.fg, letterSpacing: -0.3,
              }}>"{it.verse}"</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 1.8, color: theme.muted }}>{it.cite}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
