import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';
import Reveal from '../../components/Reveal.jsx';
import IOSDevice from '../../components/ios/IOSDevice.jsx';
import HomeScreenA from '../../components/ios/screens/HomeScreenA.jsx';

const STEPS = [
  { n: '01', head: 'Speak freely', body: 'Type, speak, or just sit. Your dialogue is anonymous — nothing leaves your device unencrypted.' },
  { n: '02', head: 'Listen patiently', body: 'A companion responds in the voice of your tradition — never preachy, never rushed, always rooted in source.' },
  { n: '03', head: 'Read deeper', body: 'Every reply links to the verse. Open the book, see the original script, transliteration, and translation side by side.' },
];

export default function HowItWorksSection() {
  const { theme, accent, religion } = useApp();

  return (
    <section style={{ background: theme.bg, padding: '120px 0', borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <Reveal>
          <SectionLabel theme={theme} accent={accent}>HOW IT WORKS</SectionLabel>
          <h2 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(48px, 6vw, 84px)', letterSpacing: -1.6, lineHeight: 1, margin: '32px 0 80px', color: theme.fg, maxWidth: 900 }}>
            Three steps,<br/>no rituals required.
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 28, alignItems: 'baseline', paddingBottom: 36, borderBottom: i === STEPS.length - 1 ? 'none' : `1px solid ${theme.line}` }}>
                  <div style={{ fontFamily: FONTS.display, fontSize: 48, fontStyle: 'italic', color: accent, fontWeight: 500, letterSpacing: -1 }}>{s.n}</div>
                  <div>
                    <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 32, letterSpacing: -0.5, fontWeight: 500, color: theme.fg, marginBottom: 12 }}>{s.head}</div>
                    <div style={{ fontFamily: FONTS.ui, fontSize: 16, lineHeight: 1.55, color: theme.muted, maxWidth: 480 }}>{s.body}</div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Link to="/how-it-works" style={{ fontFamily: FONTS.ui, fontSize: 14, fontWeight: 600, color: accent, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              See the full walkthrough
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M5.5 2L9 5.5 5.5 9" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <Reveal>
            <div style={{ transform: 'scale(0.78) rotate(-2deg)', transformOrigin: 'top center', filter: `drop-shadow(0 40px 80px ${accent}30)` }}>
              <IOSDevice dark={theme.isDark}>
                <HomeScreenA theme={theme} religion={religion} />
              </IOSDevice>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
