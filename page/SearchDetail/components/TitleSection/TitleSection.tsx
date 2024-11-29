import React from "react";
interface TitleSectionProps {
  title: string;
  rating: number;
  reviews: number;
  location: string;
}

const TitleSection = ({
  title,
  rating,
  reviews,
  location,
}: TitleSectionProps) => {
  return (
    <div className="mt-10  mx-auto text-secondary-11">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex items-center gap-1 text-secondary-05">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#C49A3B"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <span className="font-medium">{rating}</span>
              <span className="text-sm">({reviews.toLocaleString()})</span>
            </div>
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <button
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            title="Share"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>

            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            title="Save"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>

            <span className="hidden sm:inline">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
