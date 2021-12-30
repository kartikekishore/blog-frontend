import React from "react";

function Blog({ title, content, date, author }) {
  console.log(title);
  return (
    <div className="bg-[#F3C892] p-4 w-full rounded-md shadow-md hover:scale-105 transition">
      <div className="mt-1">{title}</div>
      <div className="mt-1">{content}</div>
      <div className="mt-1">Date: {date}</div>
      <div className="mt-1">Author: {author}</div>
    </div>
  );
}

export default Blog;
