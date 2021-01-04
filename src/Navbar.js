const Navbar = () => {
  return (
    <nav className="flex items-center p-8 mt-0 mb-auto border-b border-gray-100	">
      <h1 className="text-red-500 text-xl		">The Dojo Blog</h1>
      <div className="ml-auto">
        <a href="/" className="hover:text-red-500 ml-12 p-4">
          Home
        </a>
        <a href="/create" className="hover:text-red-500 ml-12 p-4">
          new Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
