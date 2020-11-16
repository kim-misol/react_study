import './App.css';
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Post from "./routes/Post";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/posts" component={Post} />
    </HashRouter>
  );
}

export default App;
