import { Routes, Route } from "react-router-dom";
import Sidenav from "../Sidenav/Sidenav";


function Dashboard() {
  return (
    <div className="App">
      <div>
        <Sidenav></Sidenav>
      </div>
    </div>
  );
}

export default Dashboard;
