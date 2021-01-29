import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="pt-2.25 pb-5 border-b border-gray-200 hover:shadow"
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-red-500 mb-2 text-lg">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
