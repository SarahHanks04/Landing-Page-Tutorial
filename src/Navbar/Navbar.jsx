import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  // FOR DROPDOWN MENU
  const [hovered, setHovered] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleDropdownClick = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // FOR HAMBURGER (BARS)
  const [menuOpen, setMenuOpen] = useState(false);

  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  };

  // THE STATE TO TRACK WINDOW WIDTH
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // TO UPDATE THE STATE ON WINDOW RESIZE
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Pagination settings
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const items = [/* your carousel items here */];
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container bg-[#f7f8fa] min-h-20 w-full">
      {/* MARQUEE */}
      <div className="marquee-container bg-[#FDBF17] z-[9999] fixed flex justify-center transition-all p-1 w-full whitespace-nowrap">
        <div className="font-400 underline text-md sm:text-xm md:text-sm lg:text-x1 animation-zoom-in-out animate-marquee inline-block">
          <a href="#">
            Break into tech! &#8358;25 million naira worth of scholarship
            available for the Fellowship Program. Apply Now!
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-[#f7f8fa] shadow-lg fixed p-1 flex items-center justify-between w-full mt-7 pb-4 z-50 pt-2">
        <div className="text-xl pl-8">
          <a className="max-w-35" href="#">
            <img
              src="https://www.thebulb.africa/static/media/bulblogoblue.f8aa821e41a7a4a52e37c9b8a25a773f.svg"
              alt="Logo"
            />
          </a>
        </div>

        <ul className="hidden md:flex items-center space-x-4 text-gray-700 gap-6 font-normal">
          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer">
              For Businesses{" "}
              <FontAwesomeIcon
                icon={hovered === 1 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">Corporate Training</li>
              <li className="px-4 py-2 hover:bg-gray-100">Hire Our Talents</li>
              <li className="px-4 py-2 hover:bg-gray-100">Office Space</li>
            </ul>
          </li>

          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer">
              For Talent{" "}
              <FontAwesomeIcon
                icon={hovered === 2 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">Fellowship Programes</li>
              <li className="px-4 py-2 hover:bg-gray-100">Career Advance</li>
              <li className="px-4 py-2 hover:bg-gray-100">Community</li>
            </ul>
          </li>

          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center cursor-pointer">
              Talent-as-a-Service{" "}
              <FontAwesomeIcon
                icon={hovered === 3 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">Recruitment</li>
              <li className="px-4 py-2 hover:bg-gray-100">Product Development</li>
            </ul>
          </li>

          <li
            className="relative group hover:text-gray-900"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center cursor-pointer">
              Why The Bulb{" "}
              <FontAwesomeIcon
                icon={hovered === 4 ? faChevronDown : faChevronUp}
                className="ml-2"
              />
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block hover:text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">About Us</li>
              <li className="px-4 py-2 hover:bg-gray-100">Blogs</li>
              <li className="px-4 py-2 hover:bg-gray-100">Newsletter</li>
              <li className="px-4 py-2 hover:bg-gray-100">Success Stories</li>
            </ul>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4 mr-8 gap-6">
          <button className="bg-[#13162D] text-white px-4 py-2 rounded-3xl">
            Get Started
          </button>

          <button
            className="relative group bg-transparent hover:text-gray-900 px-4 py-2 font-medium"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center cursor-pointer">
              Login{" "}
              <FontAwesomeIcon
                icon={hovered === 5 ? faChevronDown : faChevronUp}
                className="ml-5"
              />
            </span>
            <ul className="absolute left-0 right-0 mt-2 w-30 bg-white shadow-lg hidden group-hover:block text-gray-900">
              <li className="px-4 py-2 hover:bg-gray-100">For Students</li>
              <li className="px-4 py-2 hover:bg-gray-100">For Employee</li>
              <li className="px-4 py-2 hover:bg-gray-100">For DSA</li>
            </ul>
          </button>
        </div>

        {/* HAMBURGER MENU (BARS) */}
        <div className="md:hidden flex items-center mr-8">
          <button onClick={togglemenu}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-gray-700 text-xl"
            />
          </button>
        </div>
      </nav>

      {/* MOBILE NAV MENU */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 flex flex-col bg-white text-gray-700 z-50">
          <button
            onClick={togglemenu}
            className="self-end m-4 text-gray-700 text-xl"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="flex flex-col items-center space-y-4">
            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(1)}
            >
              <span className="cursor-pointer">
                For Businesses{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 1 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              {dropdownOpen === 1 && (
                <ul className="mt-2 w-40 bg-white shadow-lg hover:text-gray-900">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Corporate Training
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">Hire Our Talents</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Office Space</li>
                </ul>
              )}
            </li>

            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(2)}
            >
              <span className="cursor-pointer">
                For Talent{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 2 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              {dropdownOpen === 2 && (
                <ul className="mt-2 w-40 bg-white shadow-lg hover:text-gray-900">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Fellowship Programes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">Career Advance</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Community</li>
                </ul>
              )}
            </li>

            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(3)}
            >
              <span className="cursor-pointer">
                Talent-as-a-Service{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 3 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              {dropdownOpen === 3 && (
                <ul className="mt-2 w-40 bg-white shadow-lg hover:text-gray-900">
                  <li className="px-4 py-2 hover:bg-gray-100">Recruitment</li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Product Development
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative group hover:text-gray-900"
              onClick={() => handleDropdownClick(4)}
            >
              <span className="cursor-pointer">
                Why The Bulb{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 4 ? faChevronDown : faChevronUp}
                  className="ml-2"
                />
              </span>
              {dropdownOpen === 4 && (
                <ul className="mt-2 w-40 bg-white shadow-lg hover:text-gray-900">
                  <li className="px-4 py-2 hover:bg-gray-100">About Us</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Blogs</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Newsletter</li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Success Stories
                  </li>
                </ul>
              )}
            </li>

            <button className="bg-[#13162D] text-white px-4 py-2 rounded-3xl">
              Get Started
            </button>

            <button
              className="relative group bg-transparent hover:text-gray-900 px-4 py-2 font-medium"
              onClick={() => handleDropdownClick(5)}
            >
              <span className="flex items-center cursor-pointer">
                Login{" "}
                <FontAwesomeIcon
                  icon={dropdownOpen === 5 ? faChevronDown : faChevronUp}
                  className="ml-5"
                />
              </span>
              {dropdownOpen === 5 && (
                <ul className="mt-2 w-30 bg-white shadow-lg text-gray-900">
                  <li className="px-4 py-2 hover:bg-gray-100">For Students</li>
                  <li className="px-4 py-2 hover:bg-gray-100">For Employee</li>
                  <li className="px-4 py-2 hover:bg-gray-100">For DSA</li>
                </ul>
              )}
            </button>
          </ul>
        </div>
      )}

      {/* Carousel and Pagination */}
      <div className="carousel-container">
        <Slider {...settings}>
          {currentItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.image} alt={item.alt} />
              <p>{item.caption}</p>
            </div>
          ))}
        </Slider>
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Navbar;
