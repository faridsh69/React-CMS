import { BrowserRouter } from "react-router-dom";
import MiniDrawer from "./SideBar";
import Toast from "./Toast";

function App() {
  return (
    <BrowserRouter>
      <MiniDrawer></MiniDrawer>
      <Toast severity="info" message="messagex" />
    </BrowserRouter>
  );
}

export default App;
