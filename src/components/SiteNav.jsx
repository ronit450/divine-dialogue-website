import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { FONTS, RELIGIONS_LIST } from '../data/religions.jsx';
import { useResponsive } from '../hooks/useResponsive.js';

export default function SiteNav() {
  const { theme, accent, religionId, setReligionId } = useApp();
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const current = location.pathname === '/' ? 'home'
    : location.pathname === '/about' ? 'about'
    : location.pathname === '/how-it-works' ? 'how'
    : 'home';

  const navItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'how', label: 'How it works', to: '/how-it-works' },
  ];

  const containerPadding = isMobile ? '14px 20px' : '16px 40px';

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
      {/* ── Top bar ─────────────────────────────────────── */}
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: containerPadding,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: theme.fg }}>
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13" stroke={accent} strokeWidth="1.4"/>
            <path d="M16 6 L18.5 13.5 L26 16 L18.5 18.5 L16 26 L13.5 18.5 L6 16 L13.5 13.5 Z" stroke={accent} strokeWidth="1" strokeLinejoin="round" opacity=".7"/>
          </svg>
          <div style={{ fontFamily: FONTS.display, fontSize: 20, fontStyle: 'italic', fontWeight: 600, letterSpacing: -0.3 }}>
            Divine Chat
          </div>
        </Link>

        {/* Desktop + Tablet: nav links */}
        {!isMobile && (
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
        )}

        {/* Desktop + Tablet: right side controls */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Religion glyph switcher — tablet: smaller (26px), desktop: 30px */}
            <div style={{ display: 'flex', gap: 6 }}>
              {RELIGIONS_LIST.map(r => (
                <button key={r.id} onClick={() => setReligionId(r.id)} title={r.name} style={{
                  width: isTablet ? 26 : 30,
                  height: isTablet ? 26 : 30,
                  borderRadius: '50%',
                  background: r.id === religionId ? r.accentSoft : 'transparent',
                  border: `1.5px solid ${r.id === religionId ? r.accent : theme.line}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 200ms',
                }}>
                  <r.Glyph size={isTablet ? 12 : 14} color={r.id === religionId ? r.accent : theme.muted} />
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
        )}

        {/* Mobile: hamburger / close button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M6 18L18 6" stroke={theme.fg} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke={theme.fg} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        )}
      </div>

      {/* ── Mobile dropdown menu ─────────────────────────── */}
      {isMobile && menuOpen && (
        <div style={{
          background: theme.bg + 'ee',
          borderBottom: `1px solid ${theme.line}`,
        }}>
          {/* Nav links stacked vertically */}
          <div style={{ paddingTop: 4, paddingBottom: 4 }}>
            {navItems.map(it => (
              <Link
                key={it.id}
                to={it.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '16px 40px',
                  fontFamily: FONTS.ui, fontSize: 15, fontWeight: 500,
                  color: it.id === current ? theme.fg : theme.muted,
                  textDecoration: 'none',
                  borderLeft: it.id === current ? `2px solid ${accent}` : '2px solid transparent',
                  transition: 'color 200ms',
                }}
              >
                {it.label}
              </Link>
            ))}
          </div>

          {/* Religion glyph buttons row */}
          <div style={{
            padding: '12px 40px',
            display: 'flex', gap: 10,
            borderTop: `1px solid ${theme.line}`,
          }}>
            {RELIGIONS_LIST.map(r => (
              <button key={r.id} onClick={() => setReligionId(r.id)} title={r.name} style={{
                width: 34, height: 34, borderRadius: '50%',
                background: r.id === religionId ? r.accentSoft : 'transparent',
                border: `1.5px solid ${r.id === religionId ? r.accent : theme.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 200ms',
              }}>
                <r.Glyph size={16} color={r.id === religionId ? r.accent : theme.muted} />
              </button>
            ))}
          </div>

          {/* CTA button — full-width, centered */}
          <div style={{
            padding: '16px 40px',
            borderTop: `1px solid ${theme.line}`,
          }}>
            <a href="#" style={{
              fontFamily: FONTS.ui, fontSize: 14, fontWeight: 600, letterSpacing: 0.1,
              background: accent, color: '#fff',
              padding: '14px 20px', borderRadius: 999,
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'opacity 200ms',
            }}>
              Get the app
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5h7M5.5 2L9 5.5 5.5 9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
