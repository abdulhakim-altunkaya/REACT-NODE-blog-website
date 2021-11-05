import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="navBarLinks navBarLinks2">Home</Link>
      <Link to="/test4" className="navBarLinks navBarLinks2">Test-4</Link>
      <Link to="/test1" className="navBarLinks navBarLinks2">Test-1</Link>
      <Link to="/articles" className="navBarLinks navBarLinks2">Articles</Link>
      <Link to="/test3" className="navBarLinks navBarLinks2">Test-3</Link>
      <Link to="/signup" className="navBarLinks navBarLinks2">Sign Up</Link>
      <Link to="/login" className="navBarLinks navBarLinks2">Log In</Link>
      <Link to="/create" className="navBarLinks navBarLinks2">Write Article</Link>
      <Link to="/upload-image" className="navBarLinks navBarLinks2">Upload Image</Link>
    </div>
  );
}

export default Navbar;
