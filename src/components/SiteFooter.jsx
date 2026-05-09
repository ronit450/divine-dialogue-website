import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FONTS } from '../data/religions.jsx';

const D = {
  bg: '#0f0c09',
  surface: '#1a1510',
  fg: '#f4ede0',
  muted: 'rgba(244, 237, 224, 0.45)',
  line: 'rgba(244, 237, 224, 0.09)',
};

export default function SiteFooter() {
  const { accent } = useApp();
  const cols = [
    { title: 'Product', links: ['Get the app', 'How it works', 'Privacy', 'Terms'] },
    { title: 'Company', links: ['About', 'Mission', 'Team', 'Press'] },
    { title: 'Connect', links: ['hello@divinedialogue.app', 'Newsletter', 'Instagram', 'X / Twitter'] },
  ];

  return (
    <footer style={{ background: D.bg, color: D.fg, borderTop: `1px solid ${D.line}` }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '100px 40px 72px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 60, alignItems: 'start',
      }}>
        <div>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 2.4, color: D.muted, marginBottom: 16 }}>
            BEGIN A DIALOGUE
          </div>
          <div style={{
            fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500,
            fontSize: 52, letterSpacing: -1.2, lineHeight: 1.02, color: D.fg, marginBottom: 28,
          }}>
            What weighs<br/>on you?
          </div>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '13px 22px', borderRadius: 999,
            background: accent, color: '#fff', textDecoration: 'none',
            fontFamily: FONTS.ui, fontSize: 14, fontWeight: 600, letterSpacing: 0.1,
          }}>
            Download Divine Dialogue
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {cols.map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 2, color: D.muted, marginBottom: 18 }}>
              {col.title.toUpperCase()}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {col.links.map((l, j) => (
                <a key={j} href="#" style={{ fontFamily: FONTS.ui, fontSize: 14, color: D.fg, textDecoration: 'none', opacity: 0.72, transition: 'opacity 200ms' }}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: `1px solid ${D.line}`,
        maxWidth: 1320, margin: '0 auto',
        padding: '22px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 1.6, color: D.muted,
      }}>
        <div>© 2026 DIVINE DIALOGUE · MADE WITH CARE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span>FOUR TRADITIONS</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: accent, display: 'inline-block' }}/>
          <span>ONE CONVERSATION</span>
        </div>
      </div>
    </footer>
  );
}
