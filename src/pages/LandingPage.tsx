// src/components/LandingPage.tsx
import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ContactForm from "../components/shared/ContactForm";
import EngagementSteps from "../components/shared/section/EngagementSteps";
import HowItWorks from "../components/shared/section/HowItWorks";
import SamuraiCoinInfographic from "../components/shared/section/SamuraiCoinInfographic";
import WalletSetup from "../components/shared/section/WalletSetup";
import AccountCreation from "../components/shared/section/AccountCreation";
import SamuraiCoinFeatures from "../components/shared/section/SamuraiCoinFeatures";
import HeroPage from "../components/shared/Hero";
import '../index.css'
const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="background-image">
      <Header />
        <HeroPage />
        <SamuraiCoinFeatures />
        <AccountCreation />
        <WalletSetup />
        <SamuraiCoinInfographic />
        <HowItWorks />
        <EngagementSteps />
        <ContactForm />
      <Footer />
        
      </div>

    </div>
  );
};

export default LandingPage;
