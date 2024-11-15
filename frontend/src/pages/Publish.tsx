import Appbar from "../components/Appbar";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();


  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Appbar/>
      <div className="flex flex-col justify-center items-center px-4 py-8">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          {/* Title Input */}
          <label
            className="block mb-4 text-lg font-semibold text-gray-700"
            htmlFor="title-input"
          >
            Blog Title
          </label>
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog title"
            className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Text Editor */}
          <div className="mt-6">
            <label className="block mb-4 text-lg font-semibold text-gray-700">
              Blog Content
            </label>
            <SimpleTextEditor onContentChange={(content) => setContent(content)} />
          </div>

          {/* Publish Button */}
          <button
            onClick={handlePublish}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full shadow-md transition duration-200"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;

// SimpleTextEditor Component
const SimpleTextEditor = ({
  onContentChange,
}: {
  onContentChange: (content: string) => void;
}) => {
  const [content, setContent] = useState<string>("Start typing here...");

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.textContent || "";
    setContent(newContent);
    onContentChange(newContent); // Pass updated content to parent
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden">
      <div
        className="p-4 min-h-[200px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
      >
        {content}
      </div>
      <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600">
        <strong>Preview:</strong>
        <p className="mt-1">{content}</p>
      </div>
    </div>
  );
};
