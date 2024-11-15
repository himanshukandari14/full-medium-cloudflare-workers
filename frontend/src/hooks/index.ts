import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

  export interface BlogFull {
    id: string;
    title: string;
    content: string;
    publishDate?: string;
    author: {
      username: string;
    };
  }
export const useBlog=({id}:{id:string})=>{

  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogFull | null>(null)

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}api/v1/blog/get/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        console.log("Fetched Blog:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(blog,'bbbbbbbbbbbbbbb'); // Logs every render

  return { loading, blog };
}

export const useBlogs = () => {
    interface Blog {
      title: string;
      content: string;
      publishDate:string;
      id: string;
      author: {
        username: string;
      };

    }
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        console.log("Fetched Blogs:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(blogs); // Logs every render

  return { loading, blogs };
};
