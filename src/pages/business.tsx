import React from "react";
import logo from "../../public/yellowspot.app.svg";
import Image from "next/image";
import Link from "next/link";

function business() {
  return (
    <div>
      <div className="bg-white rounded-md shadow p-6 h-[700px]">
        <Link href="/">
          <Image src={logo} alt="Yellowspot App" width={50} height={50} />
          <h2 className="text-2xl font-bold mb-4">Yellow Business</h2>
        </Link>
        <p className="mb-4">
          We are seeking sponsors and investors who share our vision for
          transforming the tourism sector. <br /> If you are interested in
          joining us in our efforts to effect positive change in this industry,
          we would <br /> love to discuss potential opportunities for
          collaboration and partnership.
          <br />
          Contact us <br />
          <Link
            href="mailto:contact@yellowspot.app"
            target="_blank"
            className="text-blue-500 underline"
          >
            contact@yellowspot.app
          </Link>
        </p>
      </div>
    </div>
  );
}

export default business;
