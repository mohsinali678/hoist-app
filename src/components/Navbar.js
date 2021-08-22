import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/new-user-form'>Enter Your Health Details</Link>
                </li>
                <li>
                    <Link>Dashboard</Link>
                </li>
                <li>
                    <Link>Meal Log</Link>
                </li>
                <li>
                    <Link>Custom Trackers</Link>
                </li>
                <li>
                    <Link>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
