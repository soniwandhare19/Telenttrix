import React from 'react';
import HeroSec from './about-compo/HeroSec';
import Advantage from './about-compo/Advantage';
import GreatCertification from './about-compo/GreatCertification';
import OurCards from './about-compo/OurCards';
import OurLeadership from './about-compo/OurLeadership';
import Winning from './about-compo/Winning';

const AboutUs = () => {
  return (
    <div className='mt-12 sm:mt-22'>

      <HeroSec />
      <Advantage />
      <GreatCertification />
      <OurCards />
      {/* <Empowering/> */}
      <OurLeadership />
      <Winning />

    </div>
  )
}

export default AboutUs;