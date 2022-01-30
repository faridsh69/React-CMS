import { BrowserRouter } from "react-router-dom";
import { ToolsProvider } from "./../Contexts/ToolsContext";
import Sidebar from "./Sidebar";
import AppRoutes from "./AppRoutes";
import Toast from "./Toast";
import InternetConnection from "./InternetConnection";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToolsProvider>
        <Sidebar>
          <AppRoutes />
          <Toast />
          <InternetConnection />
        </Sidebar>
      </ToolsProvider>
    </BrowserRouter>
  );
}
