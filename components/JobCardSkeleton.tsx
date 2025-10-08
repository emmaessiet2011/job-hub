import React from 'react';

const JobCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-lg animate-pulse">
      <div className="flex-grow">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        {/* Meta info */}
        <div className="mt-4 flex gap-x-4">
          <div className="h-4 bg-gray-300 rounded w-28"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="h-5 bg-gray-200 rounded-full w-16"></div>
          <div className="h-5 bg-gray-200 rounded-full w-20"></div>
          <div className="h-5 bg-gray-200 rounded-full w-24"></div>
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
        <div className="h-10 bg-gray-300 rounded-lg flex-1"></div>
        <div className="h-10 bg-gray-300 rounded-lg flex-1"></div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
