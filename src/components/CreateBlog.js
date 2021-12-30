import React, { useState } from "react";
import axios from "axios";

function CreateBlog() {
  const [query, setQuery] = useState({
    author: "",
    title: "",
    content: "",
  });

  const submitQuery = async () => {
    // console.log(query);
    if (query.author === "" || query.title === "" || query.content === "") {
      return;
    }
    axios
      .post("http://localhost:3001/posts", query)
      .then(() => window.location.reload());
  };

  return (
    <div className=" w-[90%] md:w-[40%] rounded-md mt-4 py-2 border-2 bg-[#A3DA8D] border-orange-500 h-[80%] flex flex-col  md:h-[90%]">
      <div className="text-center text-xl font-bold text-gray-100">
        Write a blog
      </div>
      <div className="mt-4 flex-1 h-full">
        <form className="flex flex-col px-16 gap-4 h-full ">
          <input
            placeholder="Author Name"
            className="p-2"
            value={query.author}
            onChange={(event) =>
              setQuery({ ...query, author: event.target.value })
            }
          />
          <input
            placeholder="Title"
            value={query.title}
            className="p-2"
            onChange={(event) =>
              setQuery({ ...query, title: event.target.value })
            }
          />
          <textarea
            rows="2"
            placeholder="Your blog"
            value={query.content}
            className="p-2"
            onChange={(event) =>
              setQuery({ ...query, content: event.target.value })
            }
          ></textarea>
        </form>
      </div>
      <div
        className="bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-md  mx-auto px-4 py-2 mt-4 cursor-pointer hover:scale-105 transition shadow-md shadow-red-500/60 mb-4"
        onClick={submitQuery}
      >
        Submit
      </div>
    </div>
  );
}

export default CreateBlog;
