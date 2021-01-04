const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="pt-2.25 pb-5 border-b border-gray-200 hover:shadow"
        >
          <h2 className="text-red-500 mb-2 text-lg">{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
