import React from "react";
import logo from "../../public/yellowspot.app.svg";
import Image from "next/image";
import Link from "next/link";

function Features() {
  return (
    <div>
      <div className="bg-white rounded-md shadow p-6 min-h-screen">
        <Link href="/">
          <Image src={logo} alt="Yellowspot App" width={50} height={50} />
          <h2 className="text-2xl font-bold mb-4">Yellowspot</h2>
        </Link>
        <p className="mb-4">
          Our app changes the way we travel and interact with fellow travelers!
          Forever...
        </p>

        <ul className="list-disc pl-8 mb-6">
          <li className="mb-2">
            <h3 className="text-lg font-medium">Social Network Integration</h3>
            <p className="ml-4">-Connect with fellow travelers.</p>
            <p className="ml-4">
              -Follow, Bookmark, Bucketlist and Favourite to save your spots.
              Rate and review, share with family and friends.
            </p>
            <p className="ml-4">
              -Share locations and multiple photos with rates and reviews given
              by you.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Become an affiliate</h3>
            <p className="ml-4">
              Earn a comission by people booking your spots and become a travel
              influencer!
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Current Weather Updates</h3>
            <p className="ml-4">
              Locations will be updated with the current weather forecast.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Customized Travel Plans</h3>
            <p className="ml-4">
              You can plan your travel ahead with the best rated spots to the
              location/destination your visiting.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Real-time Updates</h3>
            <p className="ml-4">
              See all the price changes of a flight or hotel.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Deals</h3>
            <p className="ml-4">Stay up to date with the best deals.</p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Group Travel</h3>
            <p className="ml-4">
              Invite friends and family to arrange and book a trip via group
              messaging.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Seamless Booking</h3>
            <p className="ml-4">
              Book a flight, Airbnb or travel package directly from our app.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">Local Recommendations</h3>
            <p className="ml-4">
              Events, Restaurants, Attractions Museums etc will be included.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-lg font-medium">24/7 Live Support</h3>
            <p className="ml-4">
              We will give and connect 24/7 live support to insure a great
              travel experience.
            </p>
          </li>
        </ul>

        <Link href="/">
          <button className="bg-sky-500 py-2 px-2 rounded-full text-white hover:bg-yellow-400 font-bold">
            Get Access
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Features;
