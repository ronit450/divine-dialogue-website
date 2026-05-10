import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FONTS } from '../data/religions.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

const D = {
  bg: '#0f0c09',
  surface: '#1a1510',
  fg: '#f4ede0',
  muted: 'rgba(244, 237, 224, 0.45)',
  line: 'rgba(244, 237, 224, 0.09)',
};

export default function SiteFooter() {
  const { accent } = useApp();
  const { isMobile, isTablet } = useResponsive();

  const cols = [
    { title: 'Product', links: ['Get the app', 'How it works', 'Privacy', 'Terms'] },
    { title: 'Company', links: ['About', 'Mission', 'Team', 'Press'] },
    { title: 'Connect', links: ['hello@divinechat.app', 'Newsletter', 'Instagram', 'X / Twitter'] },
  ];

  const mainPadding = isMobile ? '60px 20px 48px' : '100px 40px 72px';
  const bottomPadding = isMobile ? '22px 20px' : '22px 40px';
  const headlineFontSize = isMobile ? 40 : 52;

  // Desktop: 1.4fr 1fr 1fr 1fr
  // Tablet: CTA spans full row (2 cols), then link cols in 1fr 1fr pairs
  // Mobile: single column
  const gridColumns = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr';
  const gridGap = isMobile ? 40 : isTablet ? 48 : 60;

  const bottomBarStyle = isMobile
    ? { flexDirection: 'column', gap: 12, textAlign: 'center', alignItems: 'center' }
    : { justifyContent: 'space-between', alignItems: 'center' };

  return (
    <footer style={{ background: D.bg, color: D.fg, borderTop: `1px solid ${D.line}` }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: mainPadding,
        display: 'grid',
        gridTemplateColumns: gridColumns,
        gap: gridGap,
        alignItems: 'start',
      }}>
        {/* CTA block — spans full row on tablet */}
        <div style={isTablet ? { gridColumn: 'span 2' } : undefined}>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 2.4, color: D.muted, marginBottom: 16 }}>
            BEGIN A DIALOGUE
          </div>
          <div style={{
            fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500,
            fontSize: headlineFontSize, letterSpacing: -1.2, lineHeight: 1.02,
            color: D.fg, marginBottom: 28,
          }}>
            What weighs<br/>on you?
          </div>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '13px 22px', borderRadius: 999,
            background: accent, color: '#fff', textDecoration: 'none',
            fontFamily: FONTS.ui, fontSize: 14, fontWeight: 600, letterSpacing: 0.1,
          }}>
            Download Divine Chat
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
        padding: bottomPadding,
        display: 'flex',
        fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 1.6, color: D.muted,
        ...bottomBarStyle,
      }}>
        <div>© 2026 DIVINE CHAT · MADE WITH CARE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span>FOUR TRADITIONS</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: accent, display: 'inline-block' }}/>
          <span>ONE CONVERSATION</span>
        </div>
      </div>
    </footer>
  );
}
