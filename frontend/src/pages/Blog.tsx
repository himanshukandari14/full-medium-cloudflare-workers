
import FullBlog from '../components/FullBlog';
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
const Blog = () => {
  const {id} = useParams();
  const { loading, blog } = useBlog({
    id:id || ""
  });
  console.log(blog,'blog hai single')

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <div>Loading...</div>
      </div>
    );
  }
  return <div>
   <FullBlog blog={blog} />
  </div>

}

export default Blog;
