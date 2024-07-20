// import React, { useState, useEffect } from "react";
// import "flowbite";
// import * as Icon from "react-feather";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(window.location.hash || "#home");

//   useEffect(() => {
//     if (!window.location.hash) {
//       setActiveLink("#home");
//     } else {
//       setActiveLink(window.location.hash);
//     }

//     const handleHashChange = () => {
//       setActiveLink(window.location.hash || "#home");
//     };

//     window.addEventListener("hashchange", handleHashChange);

//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSetActiveLink = (hash) => {
//     window.location.hash = hash;
//     setActiveLink(hash);
//     if (isOpen) toggleMenu();
//   };

//   const getLinkClass = (hash) => {
//     return `block py-2 px-3 rounded md:p-0 ${
//       activeLink === hash
//         ? "text-[#0072bb] md:bg-transparent bg-gray-200"
//         : "text-gray-900 hover:bg-gray-100 hover:text-[#005082] md:hover:bg-transparent md:hover:text-[#0072bb]"
//     } dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500`;
//   };

//   return (
//     <div>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="/#home"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               alt="Flowbite Logo"
//               className="h-8"
//             />
//           </a>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="text-white bg-[#0072bb] hover:bg-[#005082] focus:ring-4 focus:outline-none focus:ring-[#0d41e1] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-4"
//             >
//               Resume
//               <Icon.Download size="20" />
//             </button>
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className={`items-center justify-between ${
//               isOpen ? "block" : "hidden"
//             } w-full md:flex md:w-auto md:order-1`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#home"
//                   onClick={() => handleSetActiveLink("#home")}
//                   className={getLinkClass("#home")}
//                   aria-current={activeLink === "#home" ? "page" : undefined}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#experience"
//                   onClick={() => handleSetActiveLink("#experience")}
//                   className={getLinkClass("#experience")}
//                 >
//                   Experience
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#skills"
//                   onClick={() => handleSetActiveLink("#skills")}
//                   className={getLinkClass("#skills")}
//                 >
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#projects"
//                   onClick={() => handleSetActiveLink("#projects")}
//                   className={getLinkClass("#projects")}
//                 >
//                   Projects
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "flowbite";
import * as Icon from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || "#home");

  useEffect(() => {
    if (!window.location.hash) {
      setActiveLink("#home");
    } else {
      setActiveLink(window.location.hash);
    }

    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (hash) => {
    window.location.hash = hash;
    setActiveLink(hash);
    if (isOpen) toggleMenu();
  };

  const getLinkClass = (hash) => {
    return `block py-2 px-3 rounded md:p-0 ${
      activeLink === hash
        ? "text-[#0072bb] md:bg-transparent bg-gray-200"
        : "text-gray-900 hover:bg-gray-100 hover:text-[#005082] md:hover:bg-transparent md:hover:text-[#0072bb]"
    } dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500`;
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="images/logo.png" alt="Flowbite Logo" className="w-10" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="assets/Mohit-Raj-Singh-Resume.pdf"
              className="text-white bg-[#0072bb] hover:bg-[#005082] focus:ring-4 focus:outline-none focus:ring-[#0d41e1] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-4 cursor-pointer"
              download
              smooth="true"
            >
              Resume
              <Icon.Download size="20" />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  onClick={() => handleSetActiveLink("#home")}
                  className={getLinkClass("#home")}
                  aria-current={activeLink === "#home" ? "page" : undefined}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={() => handleSetActiveLink("#experience")}
                  className={getLinkClass("#experience")}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => handleSetActiveLink("#skills")}
                  className={getLinkClass("#skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => handleSetActiveLink("#projects")}
                  className={getLinkClass("#projects")}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
