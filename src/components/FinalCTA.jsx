import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FONTS } from '../data/religions.jsx';
import Reveal from './Reveal.jsx';

export default function FinalCTA() {
  const { theme, accent, religion } = useApp();
  const { Glyph } = religion;

  return (
    <section style={{
      background: theme.bg, padding: '120px 0 0',
      borderTop: `1px solid ${theme.line}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ color: accent, marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
            <Glyph size={48} color={accent} />
          </div>
          <h2 style={{
            fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500,
            fontSize: 'clamp(72px, 9vw, 152px)', letterSpacing: -2.8,
            lineHeight: 0.95, margin: '0 0 44px', color: theme.fg,
          }}>
            Begin the<br/>
            <span style={{ color: accent }}>dialogue.</span>
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{
              padding: '18px 32px', borderRadius: 999,
              background: accent, color: '#fff', textDecoration: 'none',
              fontFamily: FONTS.ui, fontSize: 15, fontWeight: 600, letterSpacing: 0.1,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              Download for iOS
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" style={{
              padding: '18px 32px', borderRadius: 999,
              background: 'transparent', color: theme.fg, textDecoration: 'none',
              border: `1px solid ${theme.line}`,
              fontFamily: FONTS.ui, fontSize: 15, fontWeight: 500,
            }}>Coming to Android</a>
          </div>
          <div style={{
            marginTop: 80, fontFamily: FONTS.mono, fontSize: 10,
            letterSpacing: 2.4, color: theme.muted,
          }}>FREE · NO SIGN-UP · NO TRACKING</div>
        </Reveal>
      </div>
    </section>
  );
}
