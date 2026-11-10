
import { Link } from "react-router-dom";

function Navbar({ brandName }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        {brandName}<span>.</span>
      </Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
