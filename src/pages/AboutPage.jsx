import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FONTS } from '../data/religions.jsx';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import Reveal from '../components/Reveal.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

const STORY = [
  { year: '2023', text: 'A late-night question, asked anonymously into a generic chatbot, came back with corporate platitudes. The founders started writing what a real answer should sound like.' },
  { year: '2024', text: 'Six months of conversations with imams, pandits, granthis, priests, and theologians shaped the voice. Reverence over reach. Source over speculation.' },
  { year: '2025', text: 'Private alpha. Three thousand people across four traditions. The most-asked question, by a wide margin: "Am I doing this right?" The answer was almost always yes.' },
  { year: '2026', text: 'Public launch on iOS. Android in summer. The conversation grows quieter, on purpose.' },
];

const VALUES = [
  ['No advertising', 'Ever. The product is paid for by us, then by you, never by your attention.'],
  ['No tracking', 'Conversations stay on your device. We see counts, never content.'],
  ['No proselytizing', 'We will never push you toward or away from a tradition. The doorway is yours to choose.'],
  ['No replacement', 'We are not your community, your clergy, or your conscience. We are a quiet companion.'],
];

export default function AboutPage() {
  const { theme, accent, religion } = useApp();
  const { Glyph } = religion;
  const { isMobile, isTablet } = useResponsive();

  const containerPadding = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px';

  const heroSectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '120px 0 80px';
  const quoteSectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '100px 0';
  const timelineSectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '160px 0';
  const valuesSectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '160px 0';

  return (
    <div style={{ background: theme.bg, color: theme.fg, minHeight: '100vh' }}>
      <SiteNav />

      {/* Hero / Our Story */}
      <section style={{ padding: heroSectionPadding }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
          <SectionLabel theme={theme} accent={accent}>OUR STORY</SectionLabel>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: isMobile
                ? 'clamp(48px, 13vw, 72px)'
                : isTablet
                ? 'clamp(56px, 10vw, 96px)'
                : 'clamp(72px, 9vw, 132px)',
              letterSpacing: isMobile ? -1.2 : -2.4,
              lineHeight: 0.95,
              margin: '32px 0 56px',
              color: theme.fg,
              maxWidth: 1100,
            }}
          >
            We started by<br />asking better<br /><span style={{ color: accent }}>questions.</span>
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile || isTablet ? '1fr' : '1.4fr 1fr',
              gap: isMobile ? 28 : isTablet ? 36 : 80,
              alignItems: 'start',
            }}
          >
            <div
              style={{
                fontFamily: FONTS.display,
                fontStyle: 'italic',
                fontSize: isMobile ? 20 : isTablet ? 22 : 28,
                lineHeight: 1.4,
                color: theme.fg,
                fontWeight: 500,
                letterSpacing: -0.3,
              }}
            >
              Divine Chat is a small studio that builds a single product: a private, reverent companion for the questions you don't bring to the dinner table.
            </div>
            <div style={{ fontFamily: FONTS.ui, fontSize: 16, lineHeight: 1.65, color: theme.muted }}>
              <p style={{ margin: '0 0 18px' }}>We are practitioners first, technologists second. Half the team prays daily; the other half is curious. All of us think the world has too few quiet rooms left.</p>
              <p style={{ margin: 0 }}>We are based in Brooklyn and Bangalore. We are independent, profit-modest, and refuse advertising. The app costs nothing. The conversations belong to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section
        style={{
          padding: quoteSectionPadding,
          background: theme.surface,
          borderTop: `1px solid ${theme.line}`,
          borderBottom: `1px solid ${theme.line}`,
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: containerPadding, textAlign: 'center' }}>
          <div style={{ color: accent, marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
            <Glyph size={36} color={accent} />
          </div>
          <blockquote
            style={{
              fontFamily: FONTS.display,
              fontStyle: 'italic',
              fontSize: isMobile
                ? 'clamp(28px, 7vw, 40px)'
                : isTablet
                ? 'clamp(32px, 5.5vw, 52px)'
                : 'clamp(40px, 5vw, 64px)',
              letterSpacing: isMobile ? -0.5 : -1,
              lineHeight: 1.2,
              color: theme.fg,
              fontWeight: 500,
              margin: 0,
            }}
          >
            "An algorithm cannot give you a soul. But it can sit beside you while you find yours."
          </blockquote>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 2.4, color: theme.muted, marginTop: 28 }}>
            FROM THE FOUNDING NOTE · MARCH 2024
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: timelineSectionPadding }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
          <SectionLabel theme={theme} accent={accent}>HOW WE GOT HERE</SectionLabel>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: isMobile
                ? 'clamp(36px, 9vw, 52px)'
                : isTablet
                ? 'clamp(40px, 7vw, 64px)'
                : 'clamp(48px, 6vw, 84px)',
              letterSpacing: isMobile ? -1 : -1.6,
              lineHeight: 1,
              margin: isMobile ? '32px 0 40px' : '32px 0 80px',
              color: theme.fg,
            }}
          >
            Three years of<br />quiet conversation.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {STORY.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '160px 1fr',
                    gap: isMobile ? 8 : isTablet ? 32 : 60,
                    padding: isMobile ? '28px 0' : '40px 0',
                    borderTop: `1px solid ${theme.line}`,
                    alignItems: 'baseline',
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.display,
                      fontStyle: 'italic',
                      fontSize: isMobile ? 40 : isTablet ? 48 : 56,
                      fontWeight: 500,
                      color: accent,
                      letterSpacing: -1,
                    }}
                  >
                    {s.year}
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.display,
                      fontSize: isMobile
                        ? 18
                        : isTablet
                        ? 'clamp(20px, 2.8vw, 28px)'
                        : 'clamp(24px, 2.6vw, 34px)',
                      letterSpacing: -0.4,
                      lineHeight: 1.3,
                      color: theme.fg,
                      maxWidth: 820,
                      fontWeight: 400,
                    }}
                  >
                    {s.text}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section
        style={{
          padding: valuesSectionPadding,
          background: theme.surface,
          borderTop: `1px solid ${theme.line}`,
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
          <SectionLabel theme={theme} accent={accent}>WHAT WE WON'T DO</SectionLabel>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: isMobile
                ? 'clamp(36px, 9vw, 52px)'
                : isTablet
                ? 'clamp(40px, 7vw, 64px)'
                : 'clamp(48px, 6vw, 84px)',
              letterSpacing: isMobile ? -1 : -1.6,
              lineHeight: 1,
              margin: isMobile ? '32px 0 32px' : '32px 0 64px',
              color: theme.fg,
              maxWidth: 900,
            }}
          >
            Our boundaries,<br />plainly stated.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? 16 : 24,
            }}
          >
            {VALUES.map(([h, b], i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  style={{
                    background: theme.bg,
                    border: `1px solid ${theme.line}`,
                    borderRadius: 20,
                    padding: isMobile ? '24px 20px' : '36px 32px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.display,
                      fontStyle: 'italic',
                      fontSize: isMobile ? 24 : 30,
                      fontWeight: 500,
                      color: theme.fg,
                      letterSpacing: -0.4,
                      marginBottom: 12,
                    }}
                  >
                    {h}
                  </div>
                  <div style={{ fontFamily: FONTS.ui, fontSize: 15, lineHeight: 1.6, color: theme.muted }}>{b}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </div>
  );
}
