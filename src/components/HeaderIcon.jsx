import { Avatar } from "@mui/material";
import React from "react";
import "../styles/HeaderIcon.css";

const HeaderIcon = ({ avatar, title, Icon }) => {
  return (
    <div className="headerIcon">
      {Icon && <Icon className="headerIcon-icon" />}
      {avatar && <Avatar className="headerIcon-icon" src={avatar} />}
      <p className="headerIcon-title">{title}</p>
    </div>
  );
};

export default HeaderIcon;
