import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import SiteNav from '../../components/SiteNav.jsx';
import SiteFooter from '../../components/SiteFooter.jsx';
import VerseTicker from '../../components/VerseTicker.jsx';
import FinalCTA from '../../components/FinalCTA.jsx';
import Hero from './Hero.jsx';
import Manifesto from './Manifesto.jsx';
import FourTraditions from './FourTraditions.jsx';
import HowItWorksSection from './HowItWorksSection.jsx';
import ChatDemo from './ChatDemo.jsx';
import Team from './Team.jsx';

export default function HomePage() {
  const { theme } = useApp();
  return (
    <div style={{ background: theme.bg, color: theme.fg, minHeight: '100vh' }}>
      <SiteNav />
      <Hero />
      <VerseTicker />
      <Manifesto />
      <FourTraditions />
      <HowItWorksSection />
      <ChatDemo />
      <Team />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}
