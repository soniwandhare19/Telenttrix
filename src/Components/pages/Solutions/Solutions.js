import React from 'react';
import HeroSection from './Sol-Compo/HeroSection';
import CardSection from './Sol-Compo/CardSection';
import InnovativeSolution from './Sol-Compo/Innovative';
import WorkForce from './Sol-Compo/WorkForce';
import OurApproach from './Sol-Compo/Approach';
import ManageService from './Sol-Compo/ManageService';
import PreferredChoice from './Sol-Compo/PrefChoice';

const Solution = () => {
  return (
    <>
      <HeroSection/>
      <InnovativeSolution/>
      <WorkForce/>
      <CardSection/>
      <ManageService/>
      <OurApproach/>
      <PreferredChoice/>
    </>
  )
}

export default Solution