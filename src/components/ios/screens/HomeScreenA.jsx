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

export default function HomeScreenA({ theme, religion }) {
  const prompts = ['Why does suffering exist?', 'How do I forgive?', 'What is faith?'];
  const { Glyph, accent, accentSoft, salutation, verse, cite } = religion;
  return (
    <div style={{ width: '100%', height: '100%', background: theme.bg, color: theme.fg, fontFamily: FONTS.ui, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingTop: 48 }}>
      <div style={{ padding: '10px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: accent }}><Glyph size={18} color={accent} /></div>
        <div style={{ width: 30, height: 30, borderRadius: 15, background: accentSoft, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.display, fontSize: 12, fontWeight: 600 }}>A</div>
      </div>

      <div style={{ padding: '28px 20px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.6, color: theme.muted, marginBottom: 10 }}>{salutation.toUpperCase()} · AIYANA</div>
        <div style={{ fontFamily: FONTS.display, fontSize: 28, fontStyle: 'italic', fontWeight: 500, letterSpacing: -0.4, lineHeight: 1.05, marginBottom: 20, color: theme.fg }}>
          What weighs on you<br/>this morning?
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {prompts.map((p, i) => (
            <div key={i} style={{ padding: '7px 11px', borderRadius: 999, fontSize: 10, fontFamily: FONTS.ui, color: theme.fg, background: 'transparent', border: `1px solid ${theme.line}` }}>{p}</div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 14px 14px 16px', borderRadius: 999, background: theme.surface, border: `1px solid ${theme.line}`, boxShadow: `0 8px 28px -12px ${accent}33` }}>
          <div style={{ flex: 1, fontFamily: FONTS.ui, fontSize: 12, color: theme.muted }}>Ask anything…</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 0 0', borderTop: `1px solid ${theme.line}` }}>
            <div style={{ color: accent, marginTop: 2, flexShrink: 0 }}><Glyph size={16} color={accent} /></div>
            <div>
              <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, color: theme.muted, marginBottom: 4 }}>VERSE FOR TODAY · {cite}</div>
              <div style={{ fontFamily: FONTS.display, fontSize: 13, fontStyle: 'italic', lineHeight: 1.35, color: theme.fg, fontWeight: 500 }}>"{verse}"</div>
            </div>
          </div>
        </div>
      </div>

      <TabBar theme={theme} accent={accent} />
    </div>
  );
}
