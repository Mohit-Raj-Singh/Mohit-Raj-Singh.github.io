import React from "react";

const Header = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="home">
      <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Mohit Raj Singh
        </h1>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Full Stack Developer
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
          I am a Full Stack Developer who enjoys solving problems and working on
          all parts of a project. I adapt well to new environments and am always
          eager to learn new skills. I look forward to contributing to
          meaningful projects and working with great teams.
        </p>
      </div>
    </section>
  );
};

export default Header;
