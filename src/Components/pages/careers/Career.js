import React from 'react';
import HeroSec from './career-compo/HeroSec';
import OurCulture from './career-compo/OurCulture';
import OurBenefits from './career-compo/OurBenefits';
import Values from './career-compo/Values';
import Team from './career-compo/Team';
import Certification from './career-compo/Certificate';
import Pace from './career-compo/Pace';

const Careers = () => {
  return (
    <>
        <HeroSec/>
        {/* <OurTalent/> */}
        <OurCulture/>
        <Values/>
        <OurBenefits/>
        <Team/>
        <Certification/>
        <Pace/>
       
    </>
  )
}

export default Careers