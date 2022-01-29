import { BrowserRouter } from "react-router-dom";
import Master from "./Master";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Master></Master>
    </BrowserRouter>
  );
}
