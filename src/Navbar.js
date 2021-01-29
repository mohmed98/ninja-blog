import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center p-8 mt-0 mb-auto border-b border-gray-100	">
      <Link to="/">
        <h1 className="font-sans	text-red-500 hover:text-red-900 text-xl">
          The Dojo Blog
        </h1>
      </Link>
      <div className="ml-auto">
        <Link to="/" className=" hover:text-red-500 ml-12 p-4">
          Home
        </Link>
        <Link to="/create" className="hover:text-red-500 ml-12 p-4">
          new Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
