"use client";
import Calendar from "@/shared/icons/Calendar";
import HomeIcon from "@/shared/icons/HomeIcon";
import KeyIcon from "@/shared/icons/KeyIcon";
import StarIcon from "@/shared/icons/StarIcon";
import React from "react";

const OverviewSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10  mx-auto text-secondary-11">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-semibold">
          Apple Country Resorts - A Vegetarian Place
        </h1>
        <p className=" mt-2">4 guests | 2 bedrooms | 2 bath | wifi</p>

        <div className="mt-6 space-y-4">
          <FeatureItem
            icon={<HomeIcon />}
            title="Entire home"
            description="You'll have the guest suite to yourself."
          />
          <FeatureItem
            icon={<HomeIcon />}
            title="Enhanced Clean"
            description="This host committed to Bindle 5-step enhanced cleaning process."
            linkText="Learn more"
          />
          <FeatureItem
            icon={<KeyIcon />}
            title="Self check-in"
            description="Check yourself in with the lockbox."
          />
          <FeatureItem
            icon={<Calendar />}
            title="Cancellation policy"
            description="Cancel before 3:00 PM on Feb 5 and get a 50% refund, minus the first night and service fee."
            linkText="Get details"
          />
          <FeatureItem
            icon={<HomeIcon />}
            title="House rules"
            description="The host doesn't allow pets, parties, or smoking."
            linkText="Get details"
          />
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">$293</p>
          <p>/ night</p>
        </div>
        <p className="flex items-center gap-1 text-sm  mt-2">
          <StarIcon />
          4.9 (1,283)
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center border border-secondary-05 rounded-md p-2 px-6 shadow-md">
            <div>
              <label className="text-sm ">Check-in</label>
              <p>Jul 14</p>
            </div>
            <span className="text-secondary-05 block">/</span>
            <div>
              <label className="text-sm ">Check-out</label>
              <p>Jul 17</p>
            </div>
          </div>
          <div>
            <label className="text-sm">Guest</label>
            <select className="select select-secondary font-poppins w-full h-16 border border-secondary-06 focus:outline-none ">
              <option>Add guest</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <p>Total</p>
            <p>$562.07</p>
          </div>
        </div>

        <button className="mt-4 w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600">
          Book now
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">Owner/property manager</p>
          <button className="text-sm text-orange-500 hover:underline">
            Ask manager a Question
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description, linkText }: any) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className=" text-sm">
        {description}{" "}
        {linkText && (
          <a className="text-orange-500 hover:underline">{linkText}</a>
        )}
      </p>
    </div>
  </div>
);

export default OverviewSection;
