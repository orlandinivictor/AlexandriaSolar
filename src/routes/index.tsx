import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Challenge1 } from "../pages/Challenge1";
import { Challenge2 } from "../pages/Challenge2";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/challenge1" component={Challenge1} />
      <Route exact path="/challenge2" component={Challenge2} />
    </Switch>
  );
}
