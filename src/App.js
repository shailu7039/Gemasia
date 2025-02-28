import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import React,{} from "react";
import { Navbar } from "./view/pages/navbar/Navbar";
import { Footer } from "./view/pages/footer/Footer";
import {Home} from "./view/pages/home/Home"
import { Contact } from "./view/pages/contact/Contact";
import { AboutUs } from "./view/pages/aboutus/AboutUs";
import { Collection } from "./view/pages/collection/Collection";
import { ErrorPage } from "./view/pages/errorpage/ErrorPage";
import { Coming } from "./view/pages/contact/components/Coming";
import { Policy } from "./view/pages/policy/Policy";
import { CertifiedDiamond } from "./view/pages/collection/components/CertifiedDiamond";
import { NonCertifiedDiamond } from "./view/pages/collection/components/NonCertifiedDiamond";
import { ProductType } from "./view/pages/collection/components/ProductType";
function App() {
  // const[ userlogin,setUserlogin]=useState()
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
       <div className="lg:pt-40 md:pt-40 pt-16">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/certified-diamond" element={<CertifiedDiamond/>}/>
        <Route path="/non-certified-diamond" element={<NonCertifiedDiamond/>}/>
        <Route path="/product-type" element={<ProductType/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/comingsoon" element={<Coming/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
       </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
