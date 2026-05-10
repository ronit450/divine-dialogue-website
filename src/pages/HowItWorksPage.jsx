import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FONTS } from '../data/religions.jsx';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import SectionLabel from '../components/SectionLabel.jsx';
import Reveal from '../components/Reveal.jsx';
import IOSDevice from '../components/ios/IOSDevice.jsx';
import HomeScreenA from '../components/ios/screens/HomeScreenA.jsx';
import HomeScreenB from '../components/ios/screens/HomeScreenB.jsx';
import HomeScreenC from '../components/ios/screens/HomeScreenC.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

const FLOW = [
  { n: '01', head: 'Open a thread', body: "No sign-up. No name. The first time you open the app, you choose a tradition (you can change it later) and start typing — or holding the mic — anything at all." },
  { n: '02', head: "Speak, don't prompt", body: "You aren't crafting a query. You're saying something out loud, finally. The companion hears tone, hesitation, what you didn't finish." },
  { n: '03', head: "Receive, don't consume", body: "A reply arrives in the cadence of your tradition — short when short is right, a verse when a verse fits. Never a wall of text." },
  { n: '04', head: 'Open the source', body: "Every citation links to the original. See the script, the transliteration, the translation. Disagree with the rendering — switch translators in two taps." },
  { n: '05', head: 'Return tomorrow', body: "The thread waits. The companion remembers what you sat with — only on your device, only for you. No analytics. No streak guilt." },
];

const SCREENS = [HomeScreenA, HomeScreenB, HomeScreenC];

const PRIVACY = [
  ['On-device first', 'The model that responds runs locally on your phone for everyday conversation.'],
  ['Encrypted sync', 'If you opt in to multi-device, threads sync end-to-end encrypted. We hold no keys.'],
  ['Zero analytics', 'We do not measure how often you open the app, what you ask, or how long you stay.'],
  ['Open citations', 'Every verse, every translation we use is publicly attributed and version-pinned.'],
];

export default function HowItWorksPage() {
  const { theme, accent, religion } = useApp();
  const { isMobile, isTablet } = useResponsive();

  const containerPadding = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px';

  const heroSectionPadding = isMobile ? '60px 0 32px' : isTablet ? '80px 0 40px' : '120px 0 60px';
  const stepsSectionPadding = isMobile ? '32px 0 60px' : isTablet ? '40px 0 80px' : '60px 0 120px';
  const privacySectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '120px 0';

  return (
    <div style={{ background: theme.bg, color: theme.fg, minHeight: '100vh' }}>
      <SiteNav />

      {/* Hero */}
      <section style={{ padding: heroSectionPadding }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
          <SectionLabel theme={theme} accent={accent}>HOW IT WORKS</SectionLabel>
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
              margin: '32px 0 40px',
              color: theme.fg,
              maxWidth: 1100,
            }}
          >
            Five small steps,<br />one long <span style={{ color: accent }}>conversation.</span>
          </h1>
          <div
            style={{
              fontFamily: FONTS.ui,
              fontSize: isMobile ? 16 : 19,
              lineHeight: 1.55,
              color: theme.muted,
              maxWidth: 640,
            }}
          >
            The whole experience is designed to feel less like a feature and more like a habit. Here is what each part of it actually does.
          </div>
        </div>
      </section>

      {/* 5-step alternating flow */}
      <section style={{ padding: stepsSectionPadding }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
          {FLOW.map((s, i) => {
            const Screen = SCREENS[i % 3];
            // On desktop: alternate phone left/right. On mobile/tablet: always text first, phone hidden.
            const right = !isMobile && !isTablet && i % 2 === 1;
            return (
              <Reveal key={i}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                    gap: isMobile ? 0 : isTablet ? 48 : 80,
                    alignItems: 'center',
                    padding: isMobile ? '40px 0' : isTablet ? '56px 0' : '80px 0',
                    borderTop: `1px solid ${theme.line}`,
                  }}
                >
                  {/* Text block */}
                  <div style={{ order: right ? 2 : 1 }}>
                    <div
                      style={{
                        fontFamily: FONTS.display,
                        fontStyle: 'italic',
                        fontSize: isMobile ? 64 : isTablet ? 80 : 96,
                        fontWeight: 500,
                        color: accent,
                        letterSpacing: -2,
                        lineHeight: 1,
                        marginBottom: isMobile ? 16 : 24,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontFamily: FONTS.display,
                        fontStyle: 'italic',
                        fontSize: isMobile
                          ? 'clamp(28px, 7vw, 40px)'
                          : isTablet
                          ? 'clamp(32px, 5vw, 48px)'
                          : 'clamp(36px, 4vw, 56px)',
                        fontWeight: 500,
                        color: theme.fg,
                        letterSpacing: -0.8,
                        marginBottom: isMobile ? 16 : 24,
                        lineHeight: 1.05,
                      }}
                    >
                      {s.head}
                    </div>
                    <div
                      style={{
                        fontFamily: FONTS.ui,
                        fontSize: isMobile ? 15 : 17,
                        lineHeight: 1.6,
                        color: theme.muted,
                        maxWidth: 480,
                      }}
                    >
                      {s.body}
                    </div>
                  </div>

                  {/* Phone mockup — hidden on mobile, shown on tablet and desktop */}
                  {!isMobile && (
                    <div
                      style={{
                        order: right ? 1 : 2,
                        display: 'flex',
                        justifyContent: 'center',
                        transform: isTablet ? 'scale(0.60)' : 'scale(0.72)',
                        transformOrigin: 'center',
                        filter: `drop-shadow(0 30px 60px ${accent}25)`,
                      }}
                    >
                      <IOSDevice dark={theme.isDark}>
                        <Screen theme={theme} religion={religion} />
                      </IOSDevice>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Privacy / Under the hood */}
      <section
        style={{
          padding: privacySectionPadding,
          background: theme.surface,
          borderTop: `1px solid ${theme.line}`,
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1.4fr',
              gap: isMobile ? 32 : isTablet ? 48 : 80,
              alignItems: 'start',
            }}
          >
            {/* Left: heading */}
            <div>
              <SectionLabel theme={theme} accent={accent}>UNDER THE HOOD</SectionLabel>
              <h2
                style={{
                  fontFamily: FONTS.display,
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: isMobile
                    ? 'clamp(36px, 9vw, 52px)'
                    : isTablet
                    ? 'clamp(36px, 6vw, 56px)'
                    : 'clamp(40px, 4.4vw, 64px)',
                  letterSpacing: -1,
                  lineHeight: 1.05,
                  margin: '32px 0 0',
                  color: theme.fg,
                }}
              >
                Built private,<br />by default.
              </h2>
            </div>

            {/* Right: privacy detail rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {PRIVACY.map(([h, b], i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '180px 1fr',
                    gap: isMobile ? 6 : 28,
                    paddingBottom: 28,
                    borderBottom: i < PRIVACY.length - 1 ? `1px solid ${theme.line}` : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.display,
                      fontStyle: 'italic',
                      fontSize: isMobile ? 20 : 22,
                      fontWeight: 500,
                      color: theme.fg,
                      letterSpacing: -0.3,
                    }}
                  >
                    {h}
                  </div>
                  <div style={{ fontFamily: FONTS.ui, fontSize: 15, lineHeight: 1.55, color: theme.muted }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </div>
  );
}
