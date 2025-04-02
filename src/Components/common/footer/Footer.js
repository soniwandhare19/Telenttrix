import { FaLinkedin, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black/90 text-white py-10 px-6 md:px-16 lg:px-40 flex-col justify-between">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-medium mb-6 text-[18px]">OUR SOLUTIONS</h3>
            <ul className="space-y-2 text-[14px]">
              <li>Contingent Staffing</li>
              <li>Recruitment Process Outsourcing (RPO)</li>
              <li>Direct Hire</li>
              <li>Master Vendor Program</li>
              <li>Payroll & Transition Services</li>
              <li>Managed Services and Project Delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-6 text-[18px]">DIVERSITY & INCLUSION</h3>
            <Link to={"/careers"}><h3 className="font-medium text-[18px] mt-6 mb-4">CAREERS </h3></Link>
            <ul className="space-y-2">
              <Link to={"/careers"}> <li className="mb-4 font-medium">Corporate Jobs</li></Link>
              <Link to={"/careers"}> <li className="font-medium">Consultant Jobs</li></Link>
            </ul>
            <h3 className="font-medium text-xl mt-6 mb-4">COMMUNITY FIRST INITIATIVES</h3>
          </div>

          <div>
            <h3 className="font-medium mb-6 text-[18px]">RESOURCES</h3>
            <ul className="space-y-2 text-[14px]">
              <li>Articles</li>
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Notices</li>
              <li>FAQs</li>
              <li>Web Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-6 text-[18px]">ABOUT US</h3>
            <ul className="space-y-2 text-[14px]">
              <li>Telenttrix Advantage</li>
              <li>Great Place to Work</li>
              <li>Awards</li>
              <li>Certifications & Accolades</li>
            </ul>

            <h1 className="mt-10 text-xl font-medium">   CONTACT US </h1>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
            <Link to={"/contact"}> <h1 className="text-lg md:text-2xl font-medium text-center md:text-left">
              CONTACT US
            </h1>
            </Link>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white" /> <span>USA</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white" /> <span>Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white" /> <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white" /> <span>Philippines</span>
              </div>
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <h1 className="text-lg md:text-xl font-medium">FOLLOW US</h1>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 hover:bg-blue-600 flex items-center justify-center">  <FaLinkedin /></div>
              <div className="w-8 h-8 bg-white/20 hover:bg-blue-900 flex items-center justify-center">  <FaFacebookF /></div>
              <div className="w-8 h-8 bg-white/20 hover:bg-black/70 flex items-center justify-center">  <FaXTwitter /></div>
              <div className="w-8 h-8 bg-white/20 hover:bg-blue-300 flex items-center justify-center">  <FaInstagram /></div>
            </div>
          </div>
        </div>



      </footer>
      <div className="bg-[#1f1f1f] text-center text-sm text-white w-full flex justify-around py-5">
        <p>© 2025 - Telenttrix LLC. </p>
        <p>| Sitemap | Privacy Policy | Terms of Use | Telenttrix Employee Online Forum Policy</p>
      </div>
    </>
  );
};

export default Footer;