import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Logo from './Logo.png';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand logo" href="#">
                    <img src={Logo} alt=""/>
                    </a>
                    <form className="d-flex ml-5">
                        <input className="form-control mr-2 search" type="search" placeholder="Search your Destination............" aria-label="Search"/>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-3"><a className="nav-link text-dark" href="/home">Home</a></li>
                            <li className="nav-item ml-3"><a className="nav-link text-dark" href="/hotel">Hotel</a></li>
                            <li className="nav-item ml-3"><a className="nav-link text-dark" href="">Blog</a></li>
                            <li className="nav-item ml-3"><a className="nav-link text-dark" href="">Contact</a></li>
                        </ul>

                        <button onClick={() => setLoggedInUser({})} className="btn btn-warning">Sign out</button>
            
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;