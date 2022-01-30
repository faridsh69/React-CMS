import { BrowserRouter } from "react-router-dom";
import { ToolsProvider } from "./../Contexts/ToolsContext";
import AppRoutes from "./AppRoutes";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToolsProvider>
        <AppRoutes />
      </ToolsProvider>
    </BrowserRouter>
  );
}
