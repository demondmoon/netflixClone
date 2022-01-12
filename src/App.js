import { Switch, Route } from "react-router-dom";
import {Home, Signin, Signup, Browse} from "./pages";
import * as ROUTES from "./constants/routes";

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Switch>
  );
};

export default App;
