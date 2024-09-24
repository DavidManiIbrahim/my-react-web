
import './Navbar.css'
import {Link} from "react-router-dom"


function Navbar() {
  

  return (
    <nav>
        <Link to="/"><h1>Zoo</h1></Link>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
