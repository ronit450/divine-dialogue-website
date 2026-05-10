import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FONTS } from '../data/religions.jsx';
import Reveal from './Reveal.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

export default function FinalCTA() {
  const { theme, accent, religion } = useApp();
  const { Glyph } = religion;
  const { isMobile } = useResponsive();

  const sectionPadding = isMobile ? '80px 0 0' : '120px 0 0';
  const containerPadding = isMobile ? '0 20px' : '0 40px';
  const headingFontSize = isMobile ? 'clamp(48px, 13vw, 72px)' : 'clamp(72px, 9vw, 152px)';
  const headingMargin = isMobile ? '0 0 32px' : '0 0 44px';
  const buttonRowStyle = isMobile
    ? { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'stretch', maxWidth: 320, margin: '0 auto' }
    : { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' };
  const buttonStretch = isMobile ? { justifyContent: 'center', width: '100%' } : {};
  const taglineMargin = isMobile ? 60 : 80;

  return (
    <section style={{
      background: theme.bg, padding: sectionPadding,
      borderTop: `1px solid ${theme.line}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding, textAlign: 'center' }}>
        <Reveal>
          <div style={{ color: accent, marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
            <Glyph size={48} color={accent} />
          </div>
          <h2 style={{
            fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500,
            fontSize: headingFontSize, letterSpacing: -2.8,
            lineHeight: 0.95, margin: headingMargin, color: theme.fg,
          }}>
            Begin the<br/>
            <span style={{ color: accent }}>dialogue.</span>
          </h2>
          <div style={buttonRowStyle}>
            <a href="#" style={{
              padding: '18px 32px', borderRadius: 999,
              background: accent, color: '#fff', textDecoration: 'none',
              fontFamily: FONTS.ui, fontSize: 15, fontWeight: 600, letterSpacing: 0.1,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              ...buttonStretch,
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
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              ...buttonStretch,
            }}>Coming to Android</a>
          </div>
          <div style={{
            marginTop: taglineMargin, fontFamily: FONTS.mono, fontSize: 10,
            letterSpacing: 2.4, color: theme.muted,
          }}>FREE · NO SIGN-UP · NO TRACKING</div>
        </Reveal>
      </div>
    </section>
  );
}
