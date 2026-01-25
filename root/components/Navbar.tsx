import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar () {

    return (
<nav className="navbar">
        <ul className="navbar-links">
            <li><Link to="/music">my music</Link></li>
            <li><Link to="/projects">my projects</Link></li>
        </ul>

</nav>
    );

};

export default Navbar;


