import React from "react";
import './menuItemStyles.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = ( { title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onCLick = {() => history.push(`${match.url}${linkUrl}`)}>{/*Lets styles vary depending on a size property passed in*/}
   <div 
   className = 'background-image'
   style = {{
    backgroundImage: `url(${imageUrl})`
  }}   
   />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);//withRouter returns a MenuItem component with required props that we need access to