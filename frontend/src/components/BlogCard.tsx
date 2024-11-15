import { Link } from "react-router-dom";

interface BlogCardProps {
  id:string;
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
}

const BlogCard = ({id, authorName, title, content, publishDate }: BlogCardProps) => {
  return (
    <Link className="w-full flex justify-center items-center" to={`/blog/${id}`}>
    <div className="max-w-[45%] w-[45%] p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Avatar name={authorName} />
        <div className="ml-3 flex justify-center items-center gap-6">
          <div className="text-lg font-semibold text-gray-800">{authorName} . </div>
          <div className="text-sm text-gray-500">{publishDate}</div>
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-700 mb-3">
        {content.slice(0, 100) + "..."}
      </p>
      <div className="text-sm font-thin text-gray-500">
        {`${Math.ceil(content.length / 100)} minute read`}
      </div>
    </div>
    </Link>
  );
};

export function Avatar({ name,size=12 }: { name: string,size?:number }) {
  return (
    <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-blue-100 rounded-full`}>
      <span className="font-medium text-blue-800 text-lg">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}

export default BlogCard;
