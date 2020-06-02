import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import Breakfast from './Breakfast/Breakfast' 
import Launch from './Launch/Launch'
import History from './History/History'
import Pending from './Pending/Pending'

function Routes() {
    return (
        <div>
            <Switch>
            <Route path="/desayunos">
              <Breakfast />
            </Route>
            <Route path="/comidas">
              <Launch />
            </Route>
            <Route path="/historial">
              <History />
            </Route>
            <Route path="/">
              <Pending />
            </Route>
      </Switch>
        </div>
    );
}

export default Routes;