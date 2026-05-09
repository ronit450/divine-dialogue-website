import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { FONTS, RELIGIONS_LIST } from '../data/religions.jsx';

export default function SiteNav() {
  const { theme, accent, religionId, setReligionId } = useApp();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const current = location.pathname === '/' ? 'home'
    : location.pathname === '/about' ? 'about'
    : location.pathname === '/how-it-works' ? 'how'
    : 'home';

  const navItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'how', label: 'How it works', to: '/how-it-works' },
  ];

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: theme.bg + 'ee',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${theme.line}`,
      transition: 'box-shadow 300ms ease',
      boxShadow: scrolled ? `0 1px 20px ${theme.line}` : 'none',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: theme.fg }}>
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13" stroke={accent} strokeWidth="1.4"/>
            <path d="M16 6 L18.5 13.5 L26 16 L18.5 18.5 L16 26 L13.5 18.5 L6 16 L13.5 13.5 Z" stroke={accent} strokeWidth="1" strokeLinejoin="round" opacity=".7"/>
          </svg>
          <div style={{ fontFamily: FONTS.display, fontSize: 20, fontStyle: 'italic', fontWeight: 600, letterSpacing: -0.3 }}>
            Divine Dialogue
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {navItems.map(it => (
            <Link key={it.id} to={it.to} style={{
              fontFamily: FONTS.ui, fontSize: 13, fontWeight: 500,
              color: it.id === current ? theme.fg : theme.muted,
              textDecoration: 'none',
              borderBottom: it.id === current ? `1px solid ${accent}` : '1px solid transparent',
              paddingBottom: 2,
              transition: 'color 200ms, border-color 200ms',
            }}>{it.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {RELIGIONS_LIST.map(r => (
              <button key={r.id} onClick={() => setReligionId(r.id)} title={r.name} style={{
                width: 30, height: 30, borderRadius: '50%',
                background: r.id === religionId ? r.accentSoft : 'transparent',
                border: `1.5px solid ${r.id === religionId ? r.accent : theme.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 200ms',
              }}>
                <r.Glyph size={14} color={r.id === religionId ? r.accent : theme.muted} />
              </button>
            ))}
          </div>

          <a href="#" style={{
            fontFamily: FONTS.ui, fontSize: 13, fontWeight: 600, letterSpacing: 0.1,
            background: accent, color: '#fff',
            padding: '10px 20px', borderRadius: 999,
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'opacity 200ms',
            marginLeft: 8,
          }}>
            Get the app
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 5.5h7M5.5 2L9 5.5 5.5 9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
