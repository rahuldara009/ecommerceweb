import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="loader-bar"></div>
    </div>
  </div>
  );
};

export default Loader;
