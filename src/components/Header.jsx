import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Header.css";
import HeaderIcon from "./HeaderIcon";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderIcon title="JOBS" Icon={BusinessCenterIcon} />
        <HeaderIcon title="Messaging" Icon={ChatIcon} />
        <HeaderIcon title="Notifications" Icon={NotificationsIcon} />
        <HeaderIcon
          avatar="https://yt3.ggpht.com/yti/APfAmoEDvllW-bB_27ZpTZeEN2QKQtiiGW8hGN2ntwsh=s88-c-k-c0x00ffffff-no-rj-mo"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
