import { Link } from "react-router";
import { FaAngleDown } from 'react-icons/fa6'

const TopMenu = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Work <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
                <ul className="dropdown-padding">
                    <li><Link to="/pages/health">Health</Link></li>
                    <li><Link to="/pages/nutrition">Nutrition </Link></li>
                    <li><Link to="/pages/education">Education</Link></li>
                    <li><Link to="/pages/sustainable-health">Sustainable Health</Link></li>
                </ul>
            </li>
            <li><Link to="/about">Partners</Link></li>
        </ul>
    )
}

export default TopMenu