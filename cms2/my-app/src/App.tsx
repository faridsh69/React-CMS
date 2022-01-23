// import "./App.css";
import { formatPrice } from "./Helpers/Numbers";
// import Button from '@mui/material/Button';

function App() {
  console.log(process.env.REACT_APP_WEBSITE_NAME);
  return (
    <div className="container">
      <header className="page-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {formatPrice(2)}
        <button className="btn btn-small btn-xs btn-sm btn-danger m-3">
          click me
        </button>
        <input className="form-control" />
      </header>
    </div>
  );
}

export default App;
