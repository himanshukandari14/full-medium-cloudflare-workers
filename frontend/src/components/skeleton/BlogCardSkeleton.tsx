

const BlogCardSkeleton = () => {
  return (
    <div className="w-[45%] p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-full"></div>
        <div className="ml-3 flex justify-center items-center gap-6">
          <div className="w-24 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="mb-3">
        <div className="w-3/4 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <div className="mb-3">
        <div className="w-full h-4 bg-gray-200 rounded-full mb-1"></div>
        <div className="w-full h-4 bg-gray-200 rounded-full mb-1"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded-full"></div>
      </div>
      <div className="w-1/4 h-4 bg-gray-200 rounded-full"></div>
    </div>
  );
};

export default BlogCardSkeleton;
