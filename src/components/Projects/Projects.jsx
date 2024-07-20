// import React from "react";
// import data from "../../Data/projects.json";

// const Projects = () => {
//   return (
//     <>
//       <div className="w-full" id="projects">
//       <h2 className="text-center text-black text-4xl md:text-4xl lg:text-6xl my-0 lg:my-10 py-6 lg:py-10 w-full">Projects</h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 m-auto w-full max-w-screen-xl">
//         {data.map((el) => (
//           <div
//             className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
//             key={el.id}
//             style={{ maxHeight: "500px" }}
//           >
//             <img className="w-full h-48 object-cover" src={el.image} alt={el.title} />

//             <div className="p-5 flex flex-col justify-between flex-grow">
//               <div>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {el.title}
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   {el.description}
//                 </p>
//               </div>
//               <div className="flex gap-2 mt-4 flex-grow justify-end">
//                 <a
//                   href={el.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-[#0072bb] hover:bg-[#005082] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
//                 >
//                   Code
//                   <svg
//                     className="rtl:rotate-180 w-4 h-4 ml-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </a>
//                 <a
//                   href={el.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-[#0072bb] hover:bg-[#005082] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
//                 >
//                   Demo
//                   <svg
//                     className="rtl:rotate-180 w-4 h-4 ml-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Projects;

// import React from "react";
// import data from "../../Data/projects.json";

// import React from "react";
// import data from "../../Data/projects.json";

// const Projects = () => {
//   return (
//     <>
//       <div className="w-full" id="projects">
//         <h2 className="text-center text-black text-4xl md:text-4xl lg:text-6xl my-0 lg:my-10 py-6 lg:py-10 w-full">
//           Projects
//         </h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 m-auto w-full max-w-screen-xl">
//         {data.map((el) => (
//           <div
//             className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col"
//             key={el.id}
//           >
//             <img
//               className="w-full h-48 object-cover"
//               src={el.image}
//               alt={el.title}
//             />

//             <div className="p-5 flex flex-col flex-grow justify-between">
//               <div>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {el.title}
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   {el.description}
//                 </p>
//               </div>
//               <div className="flex gap-2 mt-4 flex-grow justify-end">
//                 <a
//                   href={el.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-[#0072bb] hover:bg-[#005082] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
//                 >
//                   Code
//                   <svg
//                     className="rtl:rotate-180 w-4 h-4 ml-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </a>
//                 <a
//                   href={el.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-[#0072bb] hover:bg-[#005082] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
//                 >
//                   Demo
//                   <svg
//                     className="rtl:rotate-180 w-4 h-4 ml-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Projects;

import React from "react";
import data from "../../Data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="w-full" id="projects">
        <h2 className="text-center text-black text-4xl md:text-4xl lg:text-6xl my-0 lg:my-10 py-6 lg:py-10 w-full">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 m-auto w-full max-w-screen-xl">
        {data.map((el) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col"
            key={el.id}
          >
            <img
              className="w-full h-48 object-cover"
              src={el.image}
              alt={el.title}
            />

            <div
              className="p-5 flex flex-col flex-grow"
              style={{ minHeight: "300px" }}
            >
              <div className="flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.description}
                </p>
              </div>
              <div className="flex gap-2 mt-4 justify-end">
                <a
                  href={el.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-[#0072bb] hover:bg-[#005082] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
                >
                  Code
                  <svg
                    className="rtl:rotate-180 w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href={el.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-[#0072bb] hover:bg-[#005082] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
                >
                  Demo
                  <svg
                    className="rtl:rotate-180 w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
