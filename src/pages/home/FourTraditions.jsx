import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS, RELIGIONS } from '../../data/religions.jsx';
import SectionLabel from '../../components/SectionLabel.jsx';
import Reveal from '../../components/Reveal.jsx';

const TRADITION_LIST = [
  { id: 'islam', meta: '114 surahs · 6,236 verses', script: 'الفاتحة', font: "'Amiri', serif", dir: 'rtl' },
  { id: 'hinduism', meta: '18 chapters · 700 verses', script: 'गीता', font: "'Noto Sans Devanagari', sans-serif", dir: 'ltr' },
  { id: 'sikhism', meta: '1,430 angs · 5,894 shabads', script: 'ਆਦਿ ਸਚੁ', font: "'Noto Sans Gurmukhi', sans-serif", dir: 'ltr' },
  { id: 'christianity', meta: '66 books · 1,189 chapters', script: 'In principio', font: "'EB Garamond', serif", dir: 'ltr' },
];

export default function FourTraditions() {
  const { theme, accent, religionId, setReligionId } = useApp();

  return (
    <section style={{ background: theme.surface, padding: '120px 0', borderTop: `1px solid ${theme.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
            <div>
              <SectionLabel theme={theme} accent={accent}>FOUR TRADITIONS</SectionLabel>
              <h2 style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(48px, 6vw, 84px)', letterSpacing: -1.6, lineHeight: 1, margin: '32px 0 0', color: theme.fg, maxWidth: 800 }}>
                One conversation,<br/>many doorways.
              </h2>
            </div>
            <div style={{ fontFamily: FONTS.ui, fontSize: 16, lineHeight: 1.55, color: theme.muted, maxWidth: 380 }}>
              Pick a tradition to re-skin the page. Each comes with its own typography, color, salutation, and library.
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {TRADITION_LIST.map((it, i) => {
            const r = RELIGIONS[it.id];
            const active = it.id === religionId;
            return (
              <Reveal key={it.id} delay={i * 80}>
                <button onClick={() => setReligionId(it.id)} style={{ cursor: 'pointer', border: 'none', textAlign: 'left', width: '100%', padding: 0, background: 'transparent' }}>
                  <div style={{ background: theme.bg, border: `1px solid ${active ? r.accent : theme.line}`, borderRadius: 24, padding: '36px 28px', minHeight: 360, display: 'flex', flexDirection: 'column', transition: 'transform 400ms ease, border-color 400ms ease', transform: active ? 'translateY(-6px)' : 'none', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: -10, bottom: -20, fontFamily: it.font, direction: it.dir, fontSize: 92, color: r.accent, opacity: 0.08, lineHeight: 1, fontWeight: 500, pointerEvents: 'none' }}>{it.script}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
                      <div style={{ color: r.accent }}><r.Glyph size={20} color={r.accent} /></div>
                      <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 2, color: r.accent }}>{r.name.toUpperCase()}</div>
                    </div>
                    <div style={{ flex: 1 }} />
                    <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontWeight: 500, fontSize: 28, letterSpacing: -0.4, lineHeight: 1.05, color: theme.fg, marginBottom: 8, position: 'relative' }}>{r.book}</div>
                    <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 1.6, color: theme.muted, marginBottom: 18, position: 'relative' }}>{it.meta}</div>
                    <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 15, color: theme.muted, lineHeight: 1.4, position: 'relative' }}>"{r.verse}"</div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
