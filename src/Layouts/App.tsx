import { BrowserRouter } from "react-router-dom";
import Master from "./Master";
import Toast from "./Toast";
import { ToastProvider } from "./Contexts/ToastContext";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Master></Master>
        <Toast />
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
