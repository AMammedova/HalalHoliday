import React from "react";

const DescriptionSection = () => {
  return (
    <div className="w-full xl:w-1/2 mt-10 space-y-6 text-gray">
      <p>
        Welcome to The Lookout! Our light and airy guest suite on the second
        floor of our guest house is the perfect home base for a couple or solo
        traveler for exploring Downtown Fort Myers and the surrounding areas.
      </p>

      <div>
        <h2 className="text-lg font-bold text-secondary-11  mb-2">The space</h2>
        <p className="text-gray-700">
          This guest suite is located on the second floor of our carriage house.
          A private entrance accesses a queen bedroom with a private en suite
          bathroom. The suite also provides guests with a television,
          mini-fridge, microwave, electric kettle, and keurig coffee maker.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-secondary-11 mb-2">
          Guest access
        </h2>
        <p className="text-gray-700">
          Guests have access to the upstairs guest suite and are also welcome
          to explore the yard and enjoy the tropical landscaping.
        </p>
      </div>
    </div>
  );
};

export default DescriptionSection;
