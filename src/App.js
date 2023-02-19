import { useEffect } from "react";
import Breadcrumb from "./components/Breadcrumb";
import Divider from "./components/Divider";
import Logger from "./screens/Logger/Logger";
function App() {
  useEffect(() => {
    window.history.pushState(null, null, "/");
  }, []);
  return (
    <div className="container">
      <Breadcrumb />
      <Divider />
      <Logger />
    </div>
  );
}

export default App;
