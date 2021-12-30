import { useState } from "react";
import ShowBlogs from "./components/ShowBlogs";
import CreateBlog from "./components/CreateBlog";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center flex-col items-center bg-[#FFF1BD]">
      <CreateBlog />
      <div className="text-center mt-4">
        Blogs
        <ShowBlogs />
      </div>
    </div>
  );
}

export default App;
