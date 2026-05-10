import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
import { useResponsive } from '../../hooks/useResponsive.js';
import SectionLabel from '../../components/SectionLabel.jsx';
import Reveal from '../../components/Reveal.jsx';

const LINES = [
  ['We believe', ' the oldest human questions deserve newer answers, gently given.'],
  ['We believe', ' a private conversation is more honest than a public sermon.'],
  ['We believe', ' your tradition is a doorway — not a wall.'],
  ['We believe', ' technology can sit still long enough to listen.'],
];

export default function Manifesto() {
  const { theme, accent } = useApp();
  const { isMobile, isTablet } = useResponsive();

  const sectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '120px 0';
  const containerPadding = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px';
  const headingFontSize = isMobile ? 'clamp(36px, 9vw, 56px)' : 'clamp(48px, 6vw, 84px)';
  const headingMarginBottom = isMobile ? 48 : 80;
  const gridCols = isMobile ? '40px 1fr' : '80px 1fr';
  const gridGap = isMobile ? 20 : 40;
  const numberPaddingTop = isMobile ? 6 : 18;
  const textFontSize = isMobile ? 'clamp(22px, 5.5vw, 32px)' : 'clamp(32px, 3.4vw, 48px)';

  return (
    <section id="mission" style={{ background: theme.bg, padding: sectionPadding, borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
        <Reveal>
          <SectionLabel theme={theme} accent={accent}>OUR MISSION</SectionLabel>
          <h2 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: headingFontSize, letterSpacing: -1.6, lineHeight: 1, margin: `32px 0 ${headingMarginBottom}px`, color: theme.fg, maxWidth: 900 }}>
            A manifesto, in<br/>four short verses.
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {LINES.map(([head, tail], i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: gridGap, alignItems: 'baseline', paddingBottom: 48, borderBottom: i === LINES.length - 1 ? 'none' : `1px solid ${theme.line}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 2, color: accent, paddingTop: numberPaddingTop }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: FONTS.display, fontSize: textFontSize, letterSpacing: -0.6, lineHeight: 1.15, color: theme.fg, fontWeight: 400 }}>
                  <span style={{ fontStyle: 'italic', fontWeight: 500, color: accent }}>{head}</span>
                  <span>{tail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
