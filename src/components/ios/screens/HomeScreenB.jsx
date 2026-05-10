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

export default function HomeScreenB({ theme, religion }) {
  const moods = [{ label: 'Grateful', mark: '◐' }, { label: 'Restless', mark: '◔' }, { label: 'Searching', mark: '◑' }, { label: 'Heavy', mark: '●' }];
  const { Glyph, accent, accentSoft, salutation, verse, cite } = religion;

  return (
    <div style={{ width: '100%', height: '100%', background: theme.bg, color: theme.fg, fontFamily: FONTS.ui, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingTop: 48 }}>
      <div style={{ padding: '10px 18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, color: theme.muted }}>FRIDAY · 7 MAY</div>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: accentSoft, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.display, fontSize: 12, fontWeight: 600 }}>A</div>
      </div>

      <div style={{ padding: '12px 18px 0' }}>
        <div style={{ padding: '11px 12px', borderRadius: 14, background: accentSoft, color: accent, display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ flexShrink: 0 }}><Glyph size={18} color={accent} /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: FONTS.display, fontSize: 12, fontStyle: 'italic', fontWeight: 500, lineHeight: 1.3, color: accent, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>"{verse}"</div>
            <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.2, opacity: 0.75, marginTop: 2 }}>{cite}</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
        <div style={{ position: 'relative', alignSelf: 'center', marginTop: 18, marginBottom: 14, width: 130, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {[130, 102, 74, 50].map((d, i) => (
            <div key={d} style={{ position: 'absolute', width: d, height: d, borderRadius: '50%', border: `1px solid ${accent}`, opacity: 0.06 + i * 0.05 }}/>
          ))}
          <div style={{ width: 50, height: 50, borderRadius: '50%', background: accentSoft, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Glyph size={26} color={accent} />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontFamily: FONTS.display, fontSize: 22, fontStyle: 'italic', fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.3, color: theme.fg, marginBottom: 6 }}>{salutation}, Aiyana</div>
          <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, color: theme.muted }}>DAY 142 · 7-DAY STREAK</div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: 8, letterSpacing: 1.5, color: theme.muted, textAlign: 'center', marginBottom: 10 }}>HOW IS YOUR HEART TODAY?</div>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
            {moods.map((m, i) => (
              <button key={i} style={{ padding: '8px 12px', borderRadius: 999, fontFamily: FONTS.ui, fontSize: 11, fontWeight: 500, color: theme.fg, background: theme.surface, border: `1px solid ${theme.line}`, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: accent, fontSize: 9 }}>{m.mark}</span>{m.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <button style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', background: 'transparent', border: 'none', borderTop: `1px solid ${theme.line}`, width: '100%', textAlign: 'left' }}>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: accentSoft, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="9" height="9" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M5.5 2L9 5.5 5.5 9" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 7, letterSpacing: 1.4, color: theme.muted, marginBottom: 2 }}>CONTINUE · 14 MESSAGES</div>
            <div style={{ fontFamily: FONTS.display, fontSize: 13, fontStyle: 'italic', fontWeight: 500, color: theme.fg, letterSpacing: -0.2 }}>On forgiveness after betrayal</div>
          </div>
        </button>
      </div>

      <div style={{ padding: '10px 18px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 12px 12px 16px', borderRadius: 999, background: theme.surface, border: `1px solid ${theme.line}` }}>
          <div style={{ flex: 1, fontFamily: FONTS.ui, fontSize: 12, color: theme.muted }}>Ask anything…</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      <TabBar theme={theme} accent={accent} />
    </div>
  );
}
