import React, { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
import { useResponsive } from '../../hooks/useResponsive.js';
import SectionLabel from '../../components/SectionLabel.jsx';
import IOSDevice from '../../components/ios/IOSDevice.jsx';
import HomeScreenA from '../../components/ios/screens/HomeScreenA.jsx';
import HomeScreenB from '../../components/ios/screens/HomeScreenB.jsx';

export default function Hero() {
  const { theme, accent, religion } = useApp();
  const { Glyph, accentSoft } = religion;
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [draft, setDraft] = useState('');
  const [sent, setSent] = useState(false);
  const reply = sent ? "I'm here. Take your time — what part of this is sitting heaviest?" : null;

  // Derived layout values per breakpoint
  const sectionPadding = isMobile ? '72px 0 0' : isTablet ? '80px 0 0' : '96px 0 0';
  const containerPadding = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px';
  const gridCols = isDesktop ? '1fr 1fr' : '1fr';
  const gridGap = isDesktop ? 80 : 0;
  const headlineFontSize = isMobile ? 'clamp(40px, 10vw, 60px)' : 'clamp(50px, 5.2vw, 86px)';
  const descFontSize = isMobile ? 15 : 17;
  const whisperMaxWidth = isMobile ? '100%' : 460;
  const phoneScale = isMobile ? 0.65 : isTablet ? 0.72 : 1;
  const phonesHeight = isMobile ? 500 : 560;

  return (
    <section style={{
      position: 'relative',
      background: theme.bg,
      padding: sectionPadding,
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: gridGap,
          alignItems: 'center',
          minHeight: isDesktop ? 680 : 'auto',
        }}>

          {/* ── Text column ─────────────────────────────── */}
          <div style={{ paddingBottom: isDesktop ? 80 : 0 }}>
            <SectionLabel theme={theme} accent={accent}>A QUIET PLACE TO ASK</SectionLabel>

            <h1 style={{
              fontFamily: FONTS.display,
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: headlineFontSize,
              letterSpacing: -2,
              lineHeight: 0.97,
              margin: '28px 0 32px',
              color: theme.fg,
            }}>
              The questions<br/>
              you carry deserve<br/>
              a <span style={{ color: accent }}>conversation,</span><br/>
              not an algorithm.
            </h1>

            <p style={{
              fontFamily: FONTS.ui,
              fontSize: descFontSize,
              lineHeight: 1.62,
              color: theme.muted,
              maxWidth: 440,
              marginBottom: 44,
            }}>
              A private companion grounded in four sacred traditions — the Qurʼan, the Bhagavad Gita, the Guru Granth Sahib, and the Bible. Speak freely. Find the verse waiting for you.
            </p>

            {/* Whisper input */}
            <div style={{
              background: theme.surface,
              border: `1px solid ${theme.line}`,
              borderRadius: 22,
              padding: '18px 18px 14px',
              maxWidth: whisperMaxWidth,
              boxShadow: `0 8px 40px -16px ${accent}22`,
            }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: 9, letterSpacing: 2, color: theme.muted, marginBottom: 10 }}>
                WHISPER ANYTHING
              </div>
              <input
                value={draft}
                onChange={e => { setDraft(e.target.value); setSent(false); }}
                onKeyDown={e => { if (e.key === 'Enter' && draft.trim()) setSent(true); }}
                placeholder="Why does suffering feel so loud some days?"
                style={{
                  width: '100%', border: 'none', outline: 'none', background: 'transparent',
                  fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 21, fontWeight: 500,
                  color: theme.fg, padding: 0,
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, paddingTop: 10, borderTop: `1px solid ${theme.line}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 9, letterSpacing: 1.5, color: theme.muted }}>
                  ANONYMOUS · PRIVATE
                </div>
                <button
                  onClick={() => draft.trim() && setSent(true)}
                  style={{ border: 'none', background: accent, color: '#fff', padding: '8px 16px', borderRadius: 999, fontFamily: FONTS.ui, fontSize: 12, fontWeight: 600, letterSpacing: 0.1, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
                >
                  Ask
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div style={{ marginTop: 12, opacity: reply ? 1 : 0, maxHeight: reply ? 200 : 0, transition: 'opacity 600ms ease, max-height 600ms ease', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: accentSoft, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Glyph size={14} color={accent} />
                  </div>
                  <div style={{ fontFamily: FONTS.display, fontStyle: 'italic', fontSize: 16, fontWeight: 500, color: theme.fg, lineHeight: 1.4, paddingTop: 4 }}>
                    {reply}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Phone mockups ────────────────────────────── */}
          {isDesktop ? (
            /* Desktop: 2-col layout with both phones absolutely positioned */
            <div style={{ position: 'relative', height: 680, alignSelf: 'stretch' }}>
              {/* Secondary phone — HomeScreenA, behind, rotated right */}
              <div style={{
                position: 'absolute',
                left: 210,
                top: 70,
                transform: 'rotate(6deg) scale(0.84)',
                transformOrigin: 'top center',
                filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.13))',
                zIndex: 1,
                opacity: 0.68,
              }}>
                <IOSDevice dark={false}>
                  <HomeScreenA theme={theme} religion={religion} />
                </IOSDevice>
              </div>

              {/* Primary phone — HomeScreenB, front */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 20,
                transform: 'rotate(-4deg)',
                transformOrigin: 'top center',
                filter: `drop-shadow(0 48px 80px ${accent}3a)`,
                zIndex: 2,
              }}>
                <IOSDevice dark={theme.isDark}>
                  <HomeScreenB theme={theme} religion={religion} />
                </IOSDevice>
              </div>
            </div>
          ) : (
            /* Tablet + Mobile: single primary phone centered below text */
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 40,
              height: phonesHeight,
            }}>
              <div style={{
                transform: `scale(${phoneScale}) rotate(${isMobile ? '-2deg' : '0deg'})`,
                transformOrigin: 'top center',
                filter: `drop-shadow(0 48px 80px ${accent}3a)`,
              }}>
                <IOSDevice dark={theme.isDark}>
                  <HomeScreenB theme={theme} religion={religion} />
                </IOSDevice>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
