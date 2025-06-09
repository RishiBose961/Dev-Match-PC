import { Outlet } from "react-router";
import Layout from "./components/Header/Layout";

const App = () => {
  
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
