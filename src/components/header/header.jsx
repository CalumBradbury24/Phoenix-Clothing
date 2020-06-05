import React from "react";
import "./headerStyles.scss";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from "../../assets/Phoenix.svg";//New syntax
//ReactComponent tells Create React App that you want a React component that renders an SVG, rather than its filename.

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/"> {/*Clicking on logo takes user back home*/} 
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to ='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
