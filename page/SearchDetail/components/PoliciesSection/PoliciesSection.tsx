import React from "react";
import { FaClock, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const PoliciesSection = () => {
  return (
    <div className="mt-10 space-y-8 text-secondary-11">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Policies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-orange-500">Cancellation Policy</h3>
            <p className="text-gray-600 mt-2">
              Bookings at this property are non-refundable.
            </p>
            <a href="#" className="text-orange-500 hover:underline">
              Learn more about our Cancellation policies.
            </a>
          </div>
          <div>
            <p className="text-gray-600">
              If you have upcoming trips, you can manage or cancel your booking
              in your traveler account.
            </p>
            <a href="#" className="text-orange-500 hover:underline">
              View upcoming trip
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Damage and Incidentals</h3>
        <p className="text-gray-600">
          You will be responsible for any damage to the rental property caused
          by you or your party during your stay.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">House Rules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-600" />
            <p>
              <span className="font-semibold">Check in after:</span> 4:00 PM
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-600" />
            <p>
              <span className="font-semibold">Check out before:</span> 9:00 AM
            </p>
          </div>
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-600">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-500" />
            Children allowed
          </li>
          <li className="flex items-center gap-2">
            <FaTimesCircle className="text-orange-500" />
            No pets
          </li>
          <li className="flex items-center gap-2">
            <FaTimesCircle className="text-orange-500" />
            No events
          </li>
          <li className="flex items-center gap-2">
            <FaTimesCircle className="text-orange-500" />
            No smoking
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-500" />
            Max guests: 12
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-500" />
            Minimum age: 25
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PoliciesSection;
