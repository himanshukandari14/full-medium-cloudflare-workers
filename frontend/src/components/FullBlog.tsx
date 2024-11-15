import { BlogFull } from '../hooks';
import { Avatar } from './BlogCard';

const FullBlog = ({ blog }: { blog: BlogFull }) => {
  return (
    <div className="flex mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      {/* Main content (Title + Content) */}
      <div className="w-[65%] flex flex-col items-center justify-center pr-8">
        {/* Blog Title */}
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight mb-6">{blog.title}</h1>
        
        {/* Content */}
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p>{blog.content}</p>
        </div>

        {/* Optional: Call-to-Action */}
        <div className="mt-8">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
            Share this post
          </button>
        </div>
      </div>

      {/* Author and Publish Date Section (Sidebar) */}
      <div className="w-[35%] flex flex-col justify-start text-gray-500">
        {/* Author Info */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Author</h2>
        <div className="flex gap-3 items-center mb-4">
          <Avatar name={blog.author.username} />
          <p className="mr-2 text-2xl text-black font-bold">{blog.author.username}</p>
        </div>

        {/* Additional Info */}
        <span className="text-sm w-full text-center">·</span>
        <p className="mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestiae, voluptas ullam mollitia veniam
          consectetur?
        </p>
      </div>
    </div>
  );
};

export default FullBlog;
