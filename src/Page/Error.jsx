import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex max-md:flex-col items-center px-14 mt-8">
      <section className=" grid place-items-center">
        <h1 className="text-8xl text-center font-bold text-blue-700">404</h1>
        <h1 className="text-8xl text-center font-bold text-blue-700">Error</h1>
        <div className="flex items-center flex-col">
          <p className="text-2xl mt-8 text-center text-blue-600">
            The page you are looking for <br /> was moved, removed, renamed or
            might never existed.
          </p>
          <Link
            to={"/"}
            className="bg-blue-800 max-md:mb-10 t block mt-14 w-fit px-3 rounded-md  py-2 text-white"
          >
            Go To Homepage
          </Link>
        </div>
      </section>
      <section>
        <img
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f5b7e1f63c1c5f34860d9bd8/2634442.png"
          alt="Error 404"
        />
      </section>
    </div>
  );
};

export default Error;
