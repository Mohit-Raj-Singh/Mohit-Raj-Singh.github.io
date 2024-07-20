import React from "react";
import data from "../../Data/experience.json";

const Experience = () => {
  return (
    <div id="experience">
      <h2 className="text-center text-black text-4xl md:text-4xl lg:text-6xl my-0 lg:my-10 py-6 lg:py-10 w-full">
        Experience
      </h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data &&
          data?.map((el, idx) => (
            <li className="mb-10 ms-6" key={idx}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-md lg:text-lg font-semibold text-gray-900 dark:text-white">
                {el?.org_name}
              </h3>
              <h4 className="mb-1 text-base lg:text-md font-semibold text-gray-900 dark:text-white">
                {el?.title}
              </h4>
              <time className="block mb-2 text-xs lg:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {el?.duration}
              </time>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                {el?.description}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Experience;
