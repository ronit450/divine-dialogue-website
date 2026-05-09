import React from 'react';
import { FONTS } from '../../../data/religions.jsx';

function TabBar({ theme, accent }) {
  const tabs = [
    { id: 'home', label: 'Home', path: 'M3 10l8-7 8 7v9a1 1 0 01-1 1h-4v-7H9v7H4a1 1 0 01-1-1v-9z' },
    { id: 'chat', label: 'Dialogue', path: 'M3 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-4l-3 3v-3H5a2 2 0 01-2-2V6z' },
    { id: 'read', label: 'Read', path: 'M3 4h7a2 2 0 012 2v12a2 2 0 00-2-2H3V4zM19 4h-7a2 2 0 00-2 2v12a2 2 0 012-2h7V4z' },
    { id: 'me', label: 'Self', circle: true },
  ];
  return (
    <div style={{ borderTop: `1px solid ${theme.line}`, display: 'flex', justifyContent: 'space-around', padding: '8px 10px 20px', background: theme.bg }}>
      {tabs.map((t, i) => {
        const on = i === 0;
        const c = on ? accent : theme.muted;
        return (
          <div key={t.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1 }}>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              {t.circle ? <><circle cx="11" cy="8" r="3.2" stroke={c} strokeWidth="1.4"/><path d="M3 19c1-3.5 4.5-5.5 8-5.5s7 2 8 5.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/></> : <path d={t.path} stroke={c} strokeWidth="1.4" strokeLinejoin="round"/>}
            </svg>
            <div style={{ fontFamily: FONTS.ui, fontSize: 9, color: c, fontWeight: on ? 600 : 500 }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function HomeScreenC({ theme, religion }) {
  const { Glyph, accent, accentSoft, salutation, verse, cite } = religion;
  return (
    <div style={{ width: '100%', height: '100%', background: theme.bg, color: theme.fg, fontFamily: FONTS.ui, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingTop: 48 }}>
      <div style={{ padding: '14px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ color: accent }}><Glyph size={16} color={accent} /></div>
          <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, color: theme.muted }}>FRI · 7 MAY · DAY 142</div>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: accentSoft, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.display, fontSize: 12, fontWeight: 600 }}>A</div>
      </div>

      <div style={{ padding: '36px 22px 0' }}>
        <div style={{ fontFamily: FONTS.display, fontSize: 42, fontStyle: 'italic', fontWeight: 500, letterSpacing: -0.8, lineHeight: 0.95, color: theme.fg }}>{salutation.split(' ').slice(0, 2).join(' ')},</div>
        <div style={{ fontFamily: FONTS.display, fontSize: 42, fontStyle: 'italic', fontWeight: 500, letterSpacing: -0.8, lineHeight: 0.95, color: accent }}>Aiyana.</div>
      </div>

      <div style={{ padding: '28px 22px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, color: theme.muted, marginBottom: 10 }}>BEGIN A DIALOGUE</div>
        <div style={{ background: theme.surface, borderRadius: 18, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12, border: `1px solid ${theme.line}` }}>
          <div style={{ fontFamily: FONTS.display, fontSize: 17, fontStyle: 'italic', color: theme.muted, lineHeight: 1.3, minHeight: 44 }}>Type, speak, or pick a thread…</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10, borderTop: `1px solid ${theme.line}` }}>
            <button style={{ padding: '8px 16px', borderRadius: 999, background: accent, color: '#fff', border: 'none', fontFamily: FONTS.ui, fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
              Ask <svg width="10" height="10" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 3, height: 28, background: accent, borderRadius: 2 }}/>
          <div>
            <div style={{ fontSize: 10, color: theme.muted, fontFamily: FONTS.ui, marginBottom: 2 }}>Continue · 14 messages</div>
            <div style={{ fontFamily: FONTS.display, fontSize: 13, fontStyle: 'italic', fontWeight: 500, letterSpacing: -0.2, color: theme.fg }}>On forgiveness after betrayal</div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
      </div>

      <div style={{ margin: '0 16px 12px', padding: '12px 14px', borderRadius: 14, background: accent, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -14, bottom: -18, opacity: 0.12, color: '#fff' }}><Glyph size={90} color="#fff" /></div>
        <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, opacity: 0.85, marginBottom: 4 }}>VERSE FOR TODAY</div>
        <div style={{ fontFamily: FONTS.display, fontSize: 14, fontStyle: 'italic', lineHeight: 1.3, fontWeight: 500, position: 'relative' }}>"{verse}"</div>
        <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.2, opacity: 0.85, marginTop: 4 }}>{cite}</div>
      </div>

      <TabBar theme={theme} accent={accent} />
    </div>
  );
}
