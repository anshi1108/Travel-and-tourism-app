import React from "react";
import { Link } from "react-router-dom";
import "./SocialMediaSidebar.css";

const SocialMediaSidebar = () => {
  return (
    <div className="sidebarofSocials d-flex flex-column bg-white p-3">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-dark sidebar-link">
            <img
              src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000"
              alt="Home"
              width="45"
              height="45"
              className="me-2"
            />
            Home
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/home/chatbot" className="nav-link text-dark sidebar-link">
            <img
              src="https://img.icons8.com/?size=100&id=1ZUKmWM8yiKw&format=png&color=000000"
              alt="AI Chatbot"
              width="45"
              height="45"
              className="me-2"
            />
            AI Chatbot
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/explore" className="nav-link text-dark sidebar-link">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2439/2439620.png"
              alt="Explore the world"
              width="45"
              height="45"
              className="me-2"
            />
            Explore the world
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/home/Forum"
            className="nav-link text-dark sidebar-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/6576/6576146.png"
              alt="Forums"
              width="45"
              height="45"
              className="me-2"
            />
            Forums
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/map"
            className="nav-link text-dark sidebar-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/475/475489.png"
              alt="Map"
              width="45"
              height="45"
              className="me-2"
            />
            View Map
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/home/notification"
            className="nav-link text-dark sidebar-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1157/1157000.png"
              alt="Notifs"
              width="45"
              height="45"
              className="me-2"
            />
            Notifications
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link
            to="/home/create-post"
            className="nav-link text-dark sidebar-link"
          >
            <img
              src="https://img.icons8.com/?size=100&id=3739&format=png&color=000000"
              alt="Create Post"
              width="45"
              height="45"
              className="me-2"
            />
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaSidebar;
