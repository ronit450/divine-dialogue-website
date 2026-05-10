import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { FONTS } from '../../data/religions.jsx';
import { useResponsive } from '../../hooks/useResponsive.js';
import Reveal from '../../components/Reveal.jsx';

const TRANSCRIPTS = {
  islam: [
    { from: 'me', text: 'Why does prayer feel hollow some days?' },
    { from: 'dd', text: 'There is a verse for this. The Prophet himself spoke of dry seasons.' },
    { from: 'dd', text: 'Try it as conversation, not performance — even one sincere line.', cite: "QURʼAN · 2:286" },
  ],
  hinduism: [
    { from: 'me', text: 'How do I act without attachment to outcome?' },
    { from: 'dd', text: 'Krishna spoke directly to this in chapter two.' },
    { from: 'dd', text: 'Right action is enough. The fruit is not yours to hold.', cite: 'GITA · 2:47' },
  ],
  sikhism: [
    { from: 'me', text: 'I forget the One in my busy hours.' },
    { from: 'dd', text: 'Naam simran is for exactly this — small returnings, all day.' },
    { from: 'dd', text: '"Sat Naam" — three breaths is a practice, not a failure.', cite: 'JAPJI · 1' },
  ],
  christianity: [
    { from: 'me', text: 'I am anxious and the world is loud.' },
    { from: 'dd', text: 'The psalmist named that exact noise.' },
    { from: 'dd', text: 'Be still. The line is not metaphor — it is instruction.', cite: 'PSALM · 46:10' },
  ],
};

const D = {
  bg: '#0f0c09',
  surface: '#1c1610',
  fg: '#f4ede0',
  muted: 'rgba(244, 237, 224, 0.48)',
  line: 'rgba(244, 237, 224, 0.1)',
};

export default function ChatDemo() {
  const { accent, religionId, religion } = useApp();
  const { Glyph, accentSoft } = religion;
  const { isMobile, isTablet } = useResponsive();
  const msgs = TRANSCRIPTS[religionId] || TRANSCRIPTS.islam;

  const sectionPadding = isMobile ? '60px 0' : isTablet ? '80px 0' : '120px 0';
  const containerPadding = isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px';
  const headingFontSize = isMobile ? 'clamp(36px, 9vw, 56px)' : 'clamp(48px, 6vw, 80px)';
  const headingMarginBottom = isMobile ? 40 : 64;
  const chatBoxPadding = isMobile ? '24px 20px' : '36px 32px';
  const chatBoxBorderRadius = isMobile ? 20 : 28;
  const ddFontSize = isMobile ? 18 : 22;
  const userFontSize = isMobile ? 14 : 15;

  return (
    <section style={{ background: D.bg, padding: sectionPadding, borderTop: `1px solid ${D.line}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: containerPadding }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: headingMarginBottom }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ height: 1, width: 28, background: accent, opacity: 0.6 }}/>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 2.4, color: D.muted }}>
                A SAMPLE DIALOGUE
              </div>
              <div style={{ height: 1, width: 28, background: accent, opacity: 0.6 }}/>
            </div>
            <h2 style={{
              fontFamily: FONTS.display,
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: headingFontSize,
              letterSpacing: -1.6,
              lineHeight: 1,
              margin: 0,
              color: D.fg,
            }}>
              Less assistant.<br/>More <span style={{ color: accent }}>companion.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div style={{
            maxWidth: 680,
            margin: '0 auto',
            background: D.surface,
            border: `1px solid ${D.line}`,
            borderRadius: chatBoxBorderRadius,
            padding: chatBoxPadding,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 16, borderBottom: `1px solid ${D.line}`, marginBottom: 4 }}>
              <div style={{ color: accent }}><Glyph size={18} color={accent} /></div>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: 2, color: D.muted }}>
                DIALOGUE · {religion.name.toUpperCase()}
              </div>
            </div>

            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '78%',
                  padding: m.from === 'me' ? '12px 16px' : 0,
                  borderRadius: 18,
                  background: m.from === 'me' ? accent : 'transparent',
                  color: m.from === 'me' ? '#fff' : D.fg,
                }}>
                  {m.from === 'dd' && (
                    <div style={{ fontFamily: FONTS.mono, fontSize: 9, letterSpacing: 1.6, color: D.muted, marginBottom: 6 }}>
                      DIVINE CHAT
                    </div>
                  )}
                  <div style={{
                    fontFamily: m.from === 'me' ? FONTS.ui : FONTS.display,
                    fontStyle: m.from === 'dd' ? 'italic' : 'normal',
                    fontSize: m.from === 'dd' ? ddFontSize : userFontSize,
                    fontWeight: 500,
                    lineHeight: m.from === 'dd' ? 1.35 : 1.45,
                    letterSpacing: m.from === 'dd' ? -0.2 : 0,
                  }}>
                    {m.text}
                  </div>
                  {m.cite && (
                    <div style={{ fontFamily: FONTS.mono, fontSize: 9, letterSpacing: 1.8, color: accent, marginTop: 8, opacity: 0.9 }}>
                      ↘ {m.cite}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 8, paddingTop: 16, borderTop: `1px solid ${D.line}`, display: 'flex', alignItems: 'center', gap: 12, fontFamily: FONTS.ui, fontSize: 14, color: D.muted, fontStyle: 'italic' }}>
              <div className="dd-pulse" style={{ width: 6, height: 6, borderRadius: 3, background: accent, flexShrink: 0 }}/>
              continuing the thread…
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
