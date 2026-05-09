import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
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
  return (
    <section id="mission" style={{ background: theme.bg, padding: '120px 0', borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <Reveal>
          <SectionLabel theme={theme} accent={accent}>OUR MISSION</SectionLabel>
          <h2 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(48px, 6vw, 84px)', letterSpacing: -1.6, lineHeight: 1, margin: '32px 0 80px', color: theme.fg, maxWidth: 900 }}>
            A manifesto, in<br/>four short verses.
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {LINES.map(([head, tail], i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40, alignItems: 'baseline', paddingBottom: 48, borderBottom: i === LINES.length - 1 ? 'none' : `1px solid ${theme.line}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 2, color: accent, paddingTop: 18 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: FONTS.display, fontSize: 'clamp(32px, 3.4vw, 48px)', letterSpacing: -0.6, lineHeight: 1.15, color: theme.fg, fontWeight: 400 }}>
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
