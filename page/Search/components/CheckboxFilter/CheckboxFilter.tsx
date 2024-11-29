"use client";
import useWindowSize from "@/shared/hooks/useWindowSize";
import React, { useEffect, useState } from "react";

interface CheckboxFilterProps {
  filterOptions: any[];
  filters: Record<string, boolean>;
  handleFilterChange: (key: string) => void;
  title: string;
}

const CheckboxFilter = ({
  filterOptions,
  filters,
  handleFilterChange,
  title,
}: CheckboxFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (windowSize && windowSize.width) {
      setIsDesktop(windowSize.width >= 1024);
    }
  }, [windowSize.width]);

  const toggleFilterVisibility = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <h5 className="text-sm text-secondary-11">{title}</h5>
        <button
          onClick={toggleFilterVisibility}
          className="lg:hidden flex items-center text-sm text-secondary-11 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      </div>

      {(isOpen || isDesktop) && (
        <div className="space-y-2 mt-2">
          {filterOptions.map((filter) => (
            <div key={filter.key} className="flex items-center">
              <input
                type="checkbox"
                id={filter.key}
                checked={filters[filter.key]}
                onChange={() => handleFilterChange(filter.key)}
                className="checkbox checkbox-secondary mr-2 [--chkfg:white]"
              />
              <label htmlFor={filter.key} className="text-sm text-secondary-11">
                {filter.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxFilter;
