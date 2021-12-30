import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Blog from "./Blog.js";

function ShowBlogs() {
  const [blogList, setBlogList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setBlogList(res.data);
      setShowLoader(false);
    });
  }, []);
  return (
    <div className="flex-1 flex flex-col gap-4 py-8 w-[85%]">
      {!showLoader &&
        blogList.map((item, key) => (
			
          <Blog
            key={key}
            title={item.title}
            content={item.content}
            date={moment(item.date).format("DD/MM/YY HH:mm")}
            author={item.author}
          />
        ))}
    </div>
  );
}

export default ShowBlogs;
