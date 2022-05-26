import React from "react";
import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";

const Sidebar = () => {
  // generating sidebar topic using a function
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p className="hash-topicname">{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Ranabir Mandal</h2>
        <h5>mranbir07@gmail.com</h5>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Connections</p>
          <p className="sidebar-statNumber">50</p>
        </div>
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">33</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p className="recent">Recent</p>
        {recentItem("reactjs")}
        {recentItem("js")}
        {recentItem("frontend")}
        {recentItem("webdevelopment")}
        {recentItem("softwareDeveloper")}
      </div>
    </div>
  );
};

export default Sidebar;
