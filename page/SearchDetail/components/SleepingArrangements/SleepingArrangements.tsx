import React from "react";

const SleepingArrangements = () => {
  const arrangements = [
    {
      icon: <img src="/icons/bed.png" alt="" className="w-8 h-8" />,
      title: "Bedroom 1",
      description: "1 queen bed",
    },
    {
      icon: <img src="/icons/bath.png" alt="" className="w-8 h-8"/>,
      title: "Bathroom 2",
      description: "2 large bathrooms",
    },
    {
      icon: <img src="/icons/bed.png" alt="" className="w-8 h-8" />,
      title: "Master Bedroom",
      description: "1 king-size bed",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-secondary-11 mb-6">
        Sleeping arrangements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {arrangements.map((item, index) => (
          <div
            key={index}
            className="border border-gray border-opacity-50 rounded-lg p-4 shadow-md hover:shadow-md transition-shadow flex flex-col items-start justify-start gap-2"
          >
          
              {item.icon}
        
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              {item.title}
            </h3>
            <p className="text-xs text-gray text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepingArrangements;
