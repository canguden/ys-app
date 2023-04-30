import Link from "next/link";
import React from "react";
import { MdNotListedLocation } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" mb-5 justify-center items-center flex flex-row mt-10">
        <ul className="flex flex-row">
          <Link href="/features" className="flex flex-row mr-5">
            <li className="flex flex-row text-xl">
              Features{" "}
              <MdNotListedLocation className="mt-1 ml-2 text-sky-500" />
            </li>
          </Link>
          <Link href="/business" className="flex flex-row">
            <li className="flex flex-row text-xl">Business</li>
          </Link>
          <Link
            href="https://twitter.com/yellowspot_app"
            target="_blank"
            className="flex flex-row mr-5"
          >
            <li className="flex flex-row text-xl ml-5">
              Follow <FaTwitter className="mt-1 ml-2 text-sky-500" />
            </li>
          </Link>
        </ul>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <p className="text-md mb-5">© 2023 Yellowspot, All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
