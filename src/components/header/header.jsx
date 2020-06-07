import React from "react";
import "./headerStyles.scss";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from "../../assets/Phoenix.svg";//New syntax
//ReactComponent tells Create React App that you want a React component that renders an SVG, rather than its filename.
import { connect } from 'react-redux';//Component that lets us modify a component to have access to redux

//Header component recieves currentUser from the reducer
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

const mapStateToProps = state => ({//Called when store is updated
  currentUser: state.user.currentUser 
})

export default connect(mapStateToProps)(Header);//Connects component to redux store
