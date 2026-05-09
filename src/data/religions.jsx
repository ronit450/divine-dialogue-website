import React from 'react';

export const PALETTES = {
  cream: {
    name: 'Cream',
    bg: '#f6f1e7',
    fg: '#2a251f',
    surface: '#ede6d6',
    line: 'rgba(42, 37, 31, 0.12)',
    muted: 'rgba(42, 37, 31, 0.55)',
    faint: 'rgba(42, 37, 31, 0.04)',
    isDark: false,
  },
  bone: {
    name: 'Bone',
    bg: '#fafaf7',
    fg: '#1c1c1c',
    surface: '#f0efea',
    line: 'rgba(0, 0, 0, 0.1)',
    muted: 'rgba(0, 0, 0, 0.5)',
    faint: 'rgba(0, 0, 0, 0.03)',
    isDark: false,
  },
  night: {
    name: 'Night',
    bg: '#15130f',
    fg: '#f4ede0',
    surface: '#221e18',
    line: 'rgba(244, 237, 224, 0.12)',
    muted: 'rgba(244, 237, 224, 0.55)',
    faint: 'rgba(244, 237, 224, 0.04)',
    isDark: true,
  },
};

const IslamGlyph = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 L20 12 L30 16 L20 20 L16 30 L12 20 L2 16 L12 12 Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M16 6 L18.5 13.5 L26 16 L18.5 18.5 L16 26 L13.5 18.5 L6 16 L13.5 13.5 Z" stroke={color} strokeWidth="1" strokeLinejoin="round" opacity=".6"/>
  </svg>
);

const HinduismGlyph = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.2"/>
    <circle cx="16" cy="16" r="8" stroke={color} strokeWidth="1" opacity=".6"/>
    <circle cx="16" cy="16" r="3" stroke={color} strokeWidth="1.2"/>
    {[0, 45, 90, 135].map(a => (
      <line key={a} x1="16" y1="3" x2="16" y2="29" transform={`rotate(${a} 16 16)`} stroke={color} strokeWidth=".7" opacity=".4"/>
    ))}
  </svg>
);

const SikhismGlyph = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.2"/>
    <line x1="16" y1="5" x2="16" y2="27" stroke={color} strokeWidth="1.4"/>
    <path d="M9 12 Q16 16 9 20 M23 12 Q16 16 23 20" stroke={color} strokeWidth="1" fill="none" opacity=".7"/>
  </svg>
);

const ChristianityGlyph = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.2" opacity=".6"/>
    <line x1="16" y1="6" x2="16" y2="26" stroke={color} strokeWidth="1.4"/>
    <line x1="10" y1="14" x2="22" y2="14" stroke={color} strokeWidth="1.4"/>
  </svg>
);

export const RELIGIONS = {
  islam: {
    id: 'islam',
    name: 'Islam',
    salutation: 'As-salamu alaykum',
    accent: '#1f5d4c',
    accentSoft: '#e8efe8',
    book: "Qurʼan",
    verse: 'Indeed, with hardship comes ease.',
    cite: "QURʼAN · 94:6",
    Glyph: IslamGlyph,
  },
  hinduism: {
    id: 'hinduism',
    name: 'Hinduism',
    salutation: 'Namaste',
    accent: '#a8521b',
    accentSoft: '#f4ead8',
    book: 'Bhagavad Gita',
    verse: 'You have a right to action, never to its fruits.',
    cite: 'GITA · 2:47',
    Glyph: HinduismGlyph,
  },
  sikhism: {
    id: 'sikhism',
    name: 'Sikhism',
    salutation: 'Sat Sri Akal',
    accent: '#1e4d6b',
    accentSoft: '#dde7ee',
    book: 'Guru Granth Sahib',
    verse: 'There is but One, the eternal truth.',
    cite: 'JAPJI · 1',
    Glyph: SikhismGlyph,
  },
  christianity: {
    id: 'christianity',
    name: 'Christianity',
    salutation: 'Peace be with you',
    accent: '#5d4a8a',
    accentSoft: '#ebe6f0',
    book: 'The Holy Bible',
    verse: 'Be still, and know that I am God.',
    cite: 'PSALM · 46:10',
    Glyph: ChristianityGlyph,
  },
};

export const RELIGIONS_LIST = Object.values(RELIGIONS);

export const FONTS = {
  display: "'Cormorant Garamond', 'Garamond', 'Georgia', serif",
  ui: "-apple-system, 'SF Pro Text', BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', ui-monospace, monospace",
};
