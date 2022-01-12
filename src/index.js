import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./global-style";
import { AuthContextProvider } from "./context/AuthContext";

import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </AuthContextProvider>,
  document.getElementById("root")
);
