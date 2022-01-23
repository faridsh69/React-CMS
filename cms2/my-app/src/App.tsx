// import "./App.css";
import { formatPrice } from "./Helpers/Numbers";

function App() {
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
