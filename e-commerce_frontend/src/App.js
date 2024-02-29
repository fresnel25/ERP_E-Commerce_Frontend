import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./Components/post/AllPosts";
import AllCategories from "./Components/category/AllCategories";
import Header from "./Components/Home/Header";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<AllPosts></AllPosts>}></Route>
        <Route path="/categories" element={<AllCategories></AllCategories>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
