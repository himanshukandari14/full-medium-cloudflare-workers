import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/skeleton/BlogCardSkeleton";
import { useBlogs } from "../hooks";




const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs, 'bloooo');
   const username = blogs.length > 0 ? blogs[0]?.author?.username : "Guest";

  if (loading) {
    return (
      <div>
        <Appbar  />
        <div className="w-full flex flex-col justify-center items-center gap-5">
          {[...Array(5)].map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar username={username} />
      <div className="w-full flex flex-col justify-center items-center gap-5 my-3">
      {blogs.slice().reverse().map((blog) => (
          <BlogCard

            key={blog.id}
            id={blog.id}
            authorName={blog.author.username} // Updated to match the object structure
            title={blog.title}
            content={blog.content}
            publishDate={blog.publishDate || "Unknown Date"} // Fallback in case publishDate is missing
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
