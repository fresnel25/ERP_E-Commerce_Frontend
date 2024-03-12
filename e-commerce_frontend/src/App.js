import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./Components/post/AllPosts";
import AllCategories from "./Components/category/AllCategories";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddPost from "./Components/post/AddPost";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPosts></AllPosts>}></Route>
        <Route path="/categories" element={<AllCategories></AllCategories>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/addPost" element={<AddPost></AddPost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
