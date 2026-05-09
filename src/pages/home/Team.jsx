import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';
import Reveal from '../../components/Reveal.jsx';

const FOUNDERS = [
  { name: 'Aiyana Nair', role: 'Co-founder, CEO', bio: 'Former product lead at a meditation app. Studied comparative religion. Believes the right verse, at the right hour, can change a year.', initials: 'AN' },
  { name: 'Ibrahim Qureshi', role: 'Co-founder, CTO', bio: "Built private-by-default infra for two consumer apps. Hafiz of the Qurʼan. Cares deeply about local-first compute.", initials: 'IQ' },
  { name: 'Sister Mae Donovan', role: 'Theological advisor', bio: 'Theologian and translator. Reviews every response for reverence, accuracy, and humility across all four traditions.', initials: 'MD' },
];

export default function Team() {
  const { theme, accent } = useApp();
  return (
    <section id="team" style={{ background: theme.bg, padding: '120px 0', borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <Reveal>
          <SectionLabel theme={theme} accent={accent}>THE PEOPLE BEHIND IT</SectionLabel>
          <h2 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(48px, 6vw, 84px)', letterSpacing: -1.6, lineHeight: 1, margin: '32px 0 80px', color: theme.fg, maxWidth: 900 }}>
            Practitioners,<br/>not just builders.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {FOUNDERS.map((f, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', gap: 24, minHeight: 440 }}>
                <div style={{ width: '100%', aspectRatio: '4/5', background: `linear-gradient(135deg, ${accent}22 0%, ${theme.bg} 80%)`, borderRadius: 16, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 20, border: `1px solid ${theme.line}` }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 96, color: accent, opacity: 0.4, fontWeight: 500, letterSpacing: -2 }}>{f.initials}</div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 9, letterSpacing: 1.6, color: theme.muted, position: 'relative' }}>PORTRAIT · TBD</div>
                </div>
                <div>
                  <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 26, fontWeight: 500, letterSpacing: -0.4, color: theme.fg, marginBottom: 4 }}>{f.name}</div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 1.6, color: accent, marginBottom: 16 }}>{f.role.toUpperCase()}</div>
                  <div style={{ fontFamily: FONTS.ui, fontSize: 14, lineHeight: 1.55, color: theme.muted }}>{f.bio}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
