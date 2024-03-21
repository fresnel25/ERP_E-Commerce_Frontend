import { Route, Routes } from "react-router-dom";
import "./App.css";
import PublicRouter from "./pages/publicPage/PublicRouter";
import AdminRouter from "./pages/adminPage/AdminRouter";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<PublicRouter></PublicRouter>}></Route>
        <Route path="/admin/*" element={<AdminRouter></AdminRouter>}></Route>
      </Routes>
    </div>
  );
}

export default App;
