import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';
import Reveal from '../../components/Reveal.jsx';
import { useResponsive } from '../../hooks/useResponsive.js';

const FOUNDERS = [
  { name: 'Ronit Kumar', role: 'Senior AI & ML Engineer', bio: 'Specializes in computer vision and mobile applications. Brings the sacred texts to life through intelligent, on-device experiences.', initials: 'RK' },
  { name: 'Faraz Ali', role: 'AI Agents & LLM Expert', bio: 'Expert in large language models and autonomous AI agents. Shapes how Divine Chat listens, understands, and responds with reverence.', initials: 'FA' },
];

export default function Team() {
  const { theme, accent } = useApp();
  const { isMobile, isTablet } = useResponsive();

  const sectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '120px 0';
  const containerPadding = isMobile ? '0 20px' : '0 40px';
  const headingFontSize = isMobile ? 'clamp(36px, 9vw, 56px)' : 'clamp(48px, 6vw, 84px)';
  const gridColumns = isMobile ? '1fr' : 'repeat(2, 1fr)';
  const cardPadding = isMobile ? 24 : 32;
  const cardMinHeight = isMobile ? 'auto' : 440;
  const portraitAspectRatio = isMobile ? '3/2' : '4/5';

  return (
    <section id="team" style={{ background: theme.bg, padding: sectionPadding, borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
        <Reveal>
          <SectionLabel theme={theme} accent={accent}>THE PEOPLE BEHIND IT</SectionLabel>
          <h2 style={{
            fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500,
            fontSize: headingFontSize, letterSpacing: -1.6, lineHeight: 1,
            margin: '32px 0 80px', color: theme.fg, maxWidth: 900,
          }}>
            Practitioners,<br/>not just builders.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: gridColumns, gap: 28 }}>
          {FOUNDERS.map((f, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{
                background: theme.surface, border: `1px solid ${theme.line}`,
                borderRadius: 24, padding: cardPadding,
                display: 'flex', flexDirection: 'column', gap: 24,
                minHeight: cardMinHeight,
              }}>
                <div style={{
                  width: '100%', aspectRatio: portraitAspectRatio,
                  background: `linear-gradient(135deg, ${accent}22 0%, ${theme.bg} 80%)`,
                  borderRadius: 16, position: 'relative', overflow: 'hidden',
                  display: 'flex', alignItems: 'flex-end', padding: 20,
                  border: `1px solid ${theme.line}`,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 96,
                    color: accent, opacity: 0.4, fontWeight: 500, letterSpacing: -2,
                  }}>{f.initials}</div>
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
