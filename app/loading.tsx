
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex space-x-2">
        <span className="loading loading-ring loading-lg text-secondary bg-secondary-06 w-16 h-16"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
