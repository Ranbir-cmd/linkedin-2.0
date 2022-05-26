import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* app body */}
      <div className="app-body">
        {/*sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* rightsidebar */}
      </div>
    </div>
  );
}

export default App;
