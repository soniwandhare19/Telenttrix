import React from "react";
import HeroSec from "./home-compo/Herosection";
import TelOffer from "./home-compo/TelOffers";
import CountriesComponent from "./home-compo/CountriesCompo";
import CertificationComponent from "./home-compo/CertificationCompo";
import AchieveCompo from "./home-compo/AchieveCompo";
import WhyTelenttrix from "./home-compo/WhyTelenttrix";

const Home = () => {

   return (

      <>

         <HeroSec />
         <CountriesComponent />
         <AchieveCompo />
         <TelOffer />
         <WhyTelenttrix />
         <CertificationComponent />


      </>
   )
}

export default Home;