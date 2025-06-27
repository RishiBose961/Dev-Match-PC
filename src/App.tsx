import { Outlet } from "react-router";
import Sidebar from "./components/Header/SideBar";

const App = () => {
  return (
    <div className="flex h-screen">
    
      <Sidebar />
      <div className="flex-1 overflow-auto  max-w-6xl mx-auto mt-10">
        <Outlet />
      </div>
    </div>
    // <Layout>
    //   <Outlet />
    // </Layout>
  );
};

export default App;
