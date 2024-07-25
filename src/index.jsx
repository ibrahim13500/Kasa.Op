import ReactDOM from "react-dom/client";
import App from "../src/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/utils/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
