import { useState } from "react";

const Home = () => {
  const [blogs, setblogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="pt-2.25 pb-5 border-b border-gray-200 hover:shadow"
        >
          <h2 className="text-red-500 mb-2 text-lg">{blog.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
