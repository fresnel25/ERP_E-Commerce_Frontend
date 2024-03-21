import React from "react";
import { Route, Routes } from "react-router-dom";
import ALayout from "./ALayout";
import Dashboard from "./Dashboard/Dashboard";
import AddProduit from "./Produit/AddProduit";
import AllProduits from "./Produit/AllProduits";
import DetailProduit from "./Produit/DetailProduit";
import EditProduit from "./Produit/EditProduit";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<ALayout></ALayout>}>
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="produit/add" element={<AddProduit></AddProduit>}></Route>
          <Route path="produit/all" element={<AllProduits></AllProduits>}></Route>
          <Route
            path="produit/detail"
            element={<DetailProduit></DetailProduit>}
          ></Route>
          <Route path="produit/edit" element={<EditProduit></EditProduit>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
