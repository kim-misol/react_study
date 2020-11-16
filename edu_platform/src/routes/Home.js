import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
         main page
        </p>
      <Link to="/posts" className="Home-link">Post List</Link>
      </header>
    </div>
  );
}

export default Home;

