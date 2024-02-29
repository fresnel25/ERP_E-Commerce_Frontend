import { Menu } from "antd";

function Sidenav() {
  const menuSidenav = [
    {
      label: "dashboard",
    },
    {
      label: "Categorie Article",
    },
    {
      label: "Article",
    },
    {
      label: "Commandes",
    },
    {
      label: "Ventes",
    },
    {
      label: "Personnel",
    },
    {
      label: "Comptabilite",
    },
    {
      label: "Parameter",
    },
  ];

  return(

    <div>
         <Menu
         items={menuSidenav}
         >

         </Menu>
    </div>
  );
}

export default Sidenav;
