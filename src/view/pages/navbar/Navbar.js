import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import logo from "../../assets/images/Gemasia_Antwerp_Logo_Color_RGB-1.png";
import { Heart, MenuIcon, ShoppingBag } from "lucide-react";
// import samplePDF2 from "../../../view/pdf/Jewel Art Web Policy.pdf";
// import samplePDF1 from "../../../view/pdf/JA Annual Business Responsibility & OECD Compliance Report.pdf";
// import samplePDF3 from "../../../view/pdf/RJCCertificate.pdf";
// import samplePDF4 from "../../../view/pdf/JA Stakeholder Grievance Redressal Policy.pdf";

export const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Function to handle showing and hiding the navbar
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Function to handle closing the navbar when a menu item is clicked
  const handleMenuItemClick = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const handleScroll = () => {
      if (window.scrollY > 50) { // Change the scroll value to your preference
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar p-2 fixed w-full zindex99 ${scrolling ? "shadow-lg" : ""}`}>
      <div className="m-auto mob-hidden">
        <Link to="/">
          <img
            className="text-white m-auto bg-white object-contain w-185px h-130px"
            src={logo}
            alt="img"
          />
        </Link>
      </div>
      <div className="flex lg:justify-center md:justify-center justify-between items-center px-10">
        <div className="web-hidden">
          <Link to="/">
            <img
              className="text-white bg-white object-contain w-100px h-60px"
              src={logo}
              alt="img"
            />
          </Link>
        </div>
        <div className="menu-icon smflex">
          <MenuIcon onClick={handleShowNavbar} />
        </div>
        <div className={`nav-elements ${showNavbar && "active"} zindex99`}>
          <div className="lg:flex items-center gap-20">
            <ul>
              <li>
                <NavLink to="/" onClick={handleMenuItemClick}>
                  <p className="text-lg tracking-widest">Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" onClick={handleMenuItemClick}>
                  <p className="text-lg tracking-widest">About</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection" onClick={handleMenuItemClick}>
                  <p className="text-lg tracking-widest">Our Product</p>
                </NavLink>
              </li>
              {/* <li>
                <Menu isLazy>
                  <MenuButton className="text-lg" >Our Product</MenuButton>
                  <MenuList>
                    <NavLink to="/certified-diamond">
                    <MenuItem>Certified Diamonds</MenuItem>

                    </NavLink>
                    <NavLink to="/non-certified-diamond">
                    <MenuItem>Non-Certified Diamonds</MenuItem>
                    </NavLink>
                  </MenuList>
                </Menu>
              </li> */}
              <li>
                <NavLink to="/policy" onClick={handleMenuItemClick}>
                  <p className="text-lg tracking-widest">Policy</p>
                </NavLink>
              </li>
              {/* <li>
                <div className="dropdown">
                  <p className="text-lg tracking-widest">Policy</p>
                  <div className="dropdown-content">
                    <a href={samplePDF2} target="_blank" rel="noreferrer">
                      <p className="tracking-widest">Web</p>
                    </a>
                    <a href={samplePDF1} target="_blank" rel="noreferrer">
                      <p className="tracking-widest">Compliance Report</p>
                    </a>
                    <a href={samplePDF3} target="_blank" rel="noreferrer">
                      <p className="tracking-widest">RJC Certificate</p>
                    </a>
                    <a href={samplePDF4} target="_blank" rel="noreferrer">
                      <p className="tracking-widest">Stakeholder Grievance Redressal Policy</p>
                    </a>
                  </div>
                </div>
              </li> */}
              <li>
                <NavLink to="/contact-us" onClick={handleMenuItemClick}>
                  <p className="text-lg tracking-widest">Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton className="text-white" />
            <ModalBody className="custpadd0">{/* <Login /> */}</ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </nav>
  );
};
