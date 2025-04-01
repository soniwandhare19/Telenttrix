import React from "react";
import HeroSec from "./home-compo/Herosection";
import TelOffer from "./home-compo/TelOffers";
import CountriesComponent from "./home-compo/CountriesCompo";
import CertificationComponent from "./home-compo/CertificationCompo";
import AchieveCompo from "./home-compo/AchieveCompo";
import WhyArtech from "./home-compo/WhyArtech";

const Home = () => {

   return (

      <>

         <HeroSec />
         <CountriesComponent />
         <AchieveCompo />
         <TelOffer />
         <WhyArtech />
         <CertificationComponent />


      </>
   )
}

export default Home;