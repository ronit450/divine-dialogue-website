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

  return (
    <div style={{ background: theme.bg, color: theme.fg, minHeight: '100vh' }}>
      <SiteNav />

      <section style={{ padding: '120px 0 60px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
          <SectionLabel theme={theme} accent={accent}>HOW IT WORKS</SectionLabel>
          <h1 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(72px, 9vw, 132px)', letterSpacing: -2.4, lineHeight: 0.95, margin: '32px 0 40px', color: theme.fg, maxWidth: 1100 }}>
            Five small steps,<br/>one long <span style={{ color: accent }}>conversation.</span>
          </h1>
          <div style={{ fontFamily: FONTS.ui, fontSize: 19, lineHeight: 1.55, color: theme.muted, maxWidth: 640 }}>
            The whole experience is designed to feel less like a feature and more like a habit. Here is what each part of it actually does.
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
          {FLOW.map((s, i) => {
            const Screen = SCREENS[i % 3];
            const right = i % 2 === 1;
            return (
              <Reveal key={i}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', padding: '80px 0', borderTop: `1px solid ${theme.line}` }}>
                  <div style={{ order: right ? 2 : 1 }}>
                    <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 96, fontWeight: 500, color: accent, letterSpacing: -2, lineHeight: 1, marginBottom: 24 }}>{s.n}</div>
                    <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 500, color: theme.fg, letterSpacing: -0.8, marginBottom: 24, lineHeight: 1.05 }}>{s.head}</div>
                    <div style={{ fontFamily: FONTS.ui, fontSize: 17, lineHeight: 1.6, color: theme.muted, maxWidth: 480 }}>{s.body}</div>
                  </div>
                  <div style={{ order: right ? 1 : 2, display: 'flex', justifyContent: 'center', transform: 'scale(0.72)', transformOrigin: 'center', filter: `drop-shadow(0 30px 60px ${accent}25)` }}>
                    <IOSDevice dark={theme.isDark}>
                      <Screen theme={theme} religion={religion} />
                    </IOSDevice>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '120px 0', background: theme.surface, borderTop: `1px solid ${theme.line}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
            <div>
              <SectionLabel theme={theme} accent={accent}>UNDER THE HOOD</SectionLabel>
              <h2 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(40px, 4.4vw, 64px)', letterSpacing: -1, lineHeight: 1.05, margin: '32px 0 0', color: theme.fg }}>
                Built private,<br/>by default.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {PRIVACY.map(([h, b], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28, paddingBottom: 28, borderBottom: i < PRIVACY.length - 1 ? `1px solid ${theme.line}` : 'none' }}>
                  <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 22, fontWeight: 500, color: theme.fg, letterSpacing: -0.3 }}>{h}</div>
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
