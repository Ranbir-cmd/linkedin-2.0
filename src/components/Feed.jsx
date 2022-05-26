import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  });

  const sendPost = (event) => {
    event.preventDefault();
  };

  return (
    <div className="feed">
      {/* feed input section  */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit" onClick={sendPost}>
              Post
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>

      {/* post section  */}
      {posts.map((post) => (
        <Post
          name="Ranabir Mandal"
          description="frontend web developer"
          message="Starting a new position "
        />
      ))}
      <Post
        name="Ranabir Mandal"
        description="frontend web developer"
        message="Starting a new position "
      />
    </div>
  );
};

export default Feed;
