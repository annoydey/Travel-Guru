import React, { useContext } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../../Logowhite.png'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      <div >
          <div>
            <nav class="navbar navbar-expand-lg text-light ">
              <div class="container">
                <Link to="/">
                  <img id="logo" class="navbar-brand custom-logo" src={images} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-control="navbarSupportContent" aria-expanded="false" aria-lable="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportContent">
                  <form class="form-inline my-2  mx-5 my-lg-0">
                    <input class="form-control mr-sm-3 custom-input p-3" type="search" placeholder="Search Your Destination" aria-label="search" a/>
                  </form>
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active mx-2">
                      <Link class="nav-link" to="/news">News</Link>
                    </li>
                    <li class="nav-item  mx-2">
                      <Link class="nav-link" to="/destination">Destination</Link>
                    </li>
                    <li class="nav-item  mx-2">
                      <Link class="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item  mx-2">
                      <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <Link to="/Login" id="loginbutton" class="btn btn-outline-warning">Login</Link>
                  <button id="logoutbutton" class="btn btn-outline-primary my-2 my-sm-" onClick={() => setLoggedInUser({})}>Logout</button>
                </div>
              </div>
            </nav>
          </div>  
      </div>
      
    );
};

export default Header;




