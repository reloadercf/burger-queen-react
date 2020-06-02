import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import Hello from "./Hello" 
import Other from "./Other" 
function Routes() {
    return (
        <div>
            <Switch>
        <Route path="/other">
          <Other />
        </Route>
        <Route path="/">
          <Hello />
        </Route>
      </Switch>
        </div>
    );
}

export default Routes;