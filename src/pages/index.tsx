import Image from "next/image";
import Head from "next/head";
import logo from "../../public/yellowspot.app.svg";
import Link from "next/link";
import { RiRoadsterFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      {" "}
      <div className=" flex flex-col justify-center items-center h-[700px]">
        <Head>
          <title>Yellowspot Social</title>
          <meta name="description" content="A new way of travel" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4 mt-10">Yellowspot App</h1>
          <p>Revolutionizing the way we travel, forever...</p>
          <Image src={logo} alt="Yellowspot App" width={400} height={200} />
          <p className="text-lg font-bold mt-4 text-center">
            Be the first to have an account on the Private Beta Release.
          </p>
          <form className="flex flex-col items-center justify-center w-full mt-2 max-w-md">
            <div className="mb-4 w-2/3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              ></label>
              <input
                className="w-full bg-white border-2 border-gray-400 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <button
              className="bg-sky-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none "
              type="submit"
            >
              Join the waiting list
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
