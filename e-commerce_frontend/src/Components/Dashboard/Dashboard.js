import Sidenav from "../Sidenav/Sidenav";
import "./Dashboard.css";
import Head from "../Header/Head";
import Footer from "../Footer/Footer";

function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }} className="MenuContent">
      <div>
        <Sidenav></Sidenav>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "171vh" }}>
        <div className="Menu">
          <Head></Head>
        </div>
        <div className="Content">
          contenu
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
