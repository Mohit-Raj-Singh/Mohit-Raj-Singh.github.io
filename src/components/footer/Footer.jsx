import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-4">
      <div className="mx-auto w-full">
        <div className="items-center justify-between px-4 py-6 bg-gray-100 dark:bg-gray-700">
          <span className="text-md lg:text-lg text-gray-500 dark:text-gray-300 px-8">
            Designed by Mohit Raj Singh
          </span>
          <div className="flex mt-4 md:mt-4 space-x-5 rtl:space-x-reverse px-8">
            <a href="https://github.com/Mohit-Raj-Singh" target="_blank" aria-label="GitHub account">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.728-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.728.083-.728 1.205.084 1.836 1.236 1.836 1.236 1.07 1.835 2.807 1.305 3.49.997.11-.776.418-1.305.762-1.605-2.666-.3-5.466-1.34-5.466-5.964 0-1.318.47-2.393 1.235-3.236-.123-.302-.535-1.518.117-3.186 0 0 1.005-.32 3.3 1.236a11.52 11.52 0 013.003-.402c1.02.004 2.046.137 3.003.402 2.29-1.556 3.293-1.236 3.293-1.236.653 1.668.241 2.884.12 3.186.765.844 1.233 1.92 1.233 3.236 0 4.637-2.805 5.66-5.476 5.957.43.372.816 1.105.816 2.227v3.293c0 .32.215.694.827.576C20.565 22.092 24 17.598 24 12.297 24 5.67 18.627.297 12 .297z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mohit-raj-singh-m6164/" target="_blank" aria-label="LinkedIn account">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22.235 0H1.765C.788 0 0 .796 0 1.78v20.44C0 23.204.788 24 1.765 24h20.47C23.212 24 24 23.204 24 22.22V1.78C24 .796 23.212 0 22.235 0ZM7.057 20.252h-3.69V9.03h3.69v11.222ZM5.212 7.484a2.157 2.157 0 1 1 0-4.314 2.155 2.155 0 0 1 0 4.314Zm15.04 12.766H16.56v-5.607c0-1.505-.54-2.527-1.888-2.527-1.03 0-1.645.703-1.921 1.38-.098.238-.122.57-.122.902v5.852H9.992S10.08 10.75 9.992 9.03h3.695v1.52a3.61 3.61 0 0 1 3.343-1.95c2.44 0 4.27 1.59 4.27 5.007v6.645h-.048Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
