import React from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {  
  FileOutlined,
  FolderAddOutlined,
  HomeOutlined,
  OrderedListOutlined,
  PlusOutlined,
  ProductOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SidenavMenu = () => {
    const menuSidenav = [
        {
          label: (
            <Link to="/admin/dashboard">
              <span>Dashboard</span>
            </Link>
          ),
          key: "/dashboard",
          icon: <HomeOutlined></HomeOutlined>,
        },
        {
          label: "Categorie Article",
          key: "categorieSection",
          icon: <FolderAddOutlined></FolderAddOutlined>,
          children: [
            {
              label: (
                <Link to="/dashboard/AddCategory">
                  <span>Ajouter Categorie </span>
                </Link>
              ),
              key: "/dashboard/AddCategory",
              icon: <PlusOutlined></PlusOutlined>,
            },
            {
              label: (
                <Link to="/dashboard/AllCategories">
                  <span>Liste Categorie</span>
                </Link>
              ),
              key: "Allcategories",
              icon: <OrderedListOutlined></OrderedListOutlined>,
            },
          ],
        },
        {
          label: "Produit",
          key: "ProduitSection",
          icon: <ProductOutlined></ProductOutlined>,
          children: [
            {
              label: (
                <Link to="/admin/produit/add">
                  <span>Ajouter Un Produit</span>
                </Link>
              ),
              key: "/dashboard/AddPost",
              icon: <PlusOutlined></PlusOutlined>,
            },
            {
              label: (
                <Link to="/admin/produit/all">
                  <span>Tous Les Produits</span>
                </Link>
              ),
              key: "/dashboard/AllPosts",
              icon: <OrderedListOutlined></OrderedListOutlined>,
            },
          ],
        },
        {
          label: "Commandes",
          key: "OrderSection",
          icon: <OrderedListOutlined></OrderedListOutlined>,
          children: [
            {
              label: (
                <Link to="/add order">
                  <span>Ajouter Commande</span>
                </Link>
              ),
              key: "AddOrder",
              icon: <PlusOutlined></PlusOutlined>,
            },
            {
              label: (
                <Link to="/listAllorders">
                  <span>Liste Commande</span>
                </Link>
              ),
              key: "ListOrder",
              icon: <OrderedListOutlined></OrderedListOutlined>,
            },
          ],
        },
        {
          label: "Ventes",
          key: "VenteSection",
          icon: <ShoppingOutlined></ShoppingOutlined>,
          children: [
            {
              label: (
                <Link to="/add sale">
                  <span>Ajouter Vente</span>
                </Link>
              ),
              key: "AddVente",
              icon: <PlusOutlined></PlusOutlined>,
            },
            {
              label: (
                <Link to="/listAllsales">
                  <span>Liste Vente</span>
                </Link>
              ),
              key: "ListVente",
              icon: <OrderedListOutlined></OrderedListOutlined>,
            },
          ],
        },
        {
          label: "Personnel",
          icon: <UserOutlined></UserOutlined>,
          children: [
            {
              label: (
                <Link to="/dashboard/AddPersonnel">
                  <span>Ajouter Personnel</span>
                </Link>
              ),
              key: "AddPersonnel",
              icon: <PlusOutlined></PlusOutlined>,
            },
            {
              label: (
                <Link to="/dashboard/AllPersonnels">
                  <span>Liste Personnel</span>
                </Link>
              ),
              key: "ListPersonnel",
              icon: <OrderedListOutlined></OrderedListOutlined>,
            },
          ],
        },
        {
          label: (
            <Link to="/bilan">
              <span>Comptabilite</span>
            </Link>
          ),
          key: "comptabilite",
          icon: <FileOutlined></FileOutlined>,
        },
        {
          label: (
            <Link to="/setting">
              <span>Parametre</span>
            </Link>
          ),
          key: "setting",
          icon: <SettingOutlined></SettingOutlined>,
        },
      ];
    
      return (
        <div>
              <Menu
                theme="dark"
                mode="inline"
                items={menuSidenav}
                className="sidenav-menu"
                style={{width: "37vh"}}
              ></Menu>
        </div>
      );
};

export default SidenavMenu;