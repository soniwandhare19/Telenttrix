import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/common/header/Header';
import Footer from './Components/common/footer/Footer';
import ContactUs from './Components/pages/contact/Contact';
import Community from './Components/pages/community/Community';
import Solution from './Components/pages/Solutions/Solutions';
import Careers from './Components/pages/careers/Career';
import Home from './Components/pages/home/Home';
import AboutUs from './Components/pages/about/About';

const App = () => {
  return (
    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path='/about' element={<AboutUs />}></Route>

        <Route path='/contact' element={<ContactUs />}></Route>

        <Route path='/community' element={<Community />}></Route>

        <Route path='/solutions' element={<Solution />}></Route>

        <Route path='/careers' element={<Careers />}></Route>

      </Routes>

      <Footer />

    </>
  )
}

export default App;