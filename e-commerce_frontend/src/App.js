import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddCategory from "./Components/Pages/category/AddCategory";
import AllCategories from "./Components/Pages/category/AllCategories";
import Updatecategory from "./Components/Pages/category/UpdateCategory";
import AddPost from "./Components/Pages/post/AddPost";
import AllPosts from "./Components/Pages/post/AllPosts";
import Home from "./Components/Home/Home";
import UpdatePost from "./Components/Pages/post/UpdatePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        {/* Route pour Categorie */}
        <Route
          path="/dashboard/AddCategory"
          element={<AddCategory></AddCategory>}
        ></Route>
        <Route
          path="/dashboard/AllCategories"
          element={<AllCategories></AllCategories>}
        ></Route>
        <Route
          path="/dashboard/UpdateCategory"
          element={<Updatecategory></Updatecategory>}
        ></Route>
        {/* Route pour Aricle */}
        <Route path="/dashboard/AddPost" element={<AddPost></AddPost>}></Route>
        <Route
          path="/dashboard/AllPosts"
          element={<AllPosts></AllPosts>}
        ></Route>
        <Route
          path="//dashboard/AllPosts"
          element={<UpdatePost></UpdatePost>}
        ></Route>
        {/* Route pour Aricle */}
        <Route path="/dashboard/AddPost" element={<AddPost></AddPost>}></Route>
        <Route
          path="/dashboard/AllPosts"
          element={<AllPosts></AllPosts>}
        ></Route>
        <Route
          path="//dashboard/AllPosts"
          element={<UpdatePost></UpdatePost>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
