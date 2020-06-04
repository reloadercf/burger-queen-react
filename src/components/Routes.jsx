import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import Breakfast from './Breakfast/Breakfast' 
import Launch from './Launch/Launch'
import History from './History/History'
import Pending from './Pending/Pending'

function Routes({desayuno,comida,carrito,guardarCarrito,total,manipularTotal}) {
    return (
        <div>
            <Switch>
            <Route path="/desayunos">
              <Breakfast desayuno={desayuno} carrito={carrito} guardarCarrito={guardarCarrito} total={total} manipularTotal={manipularTotal} />
            </Route>
            <Route path="/comidas">
              <Launch comida={comida} carrito={carrito} guardarCarrito={guardarCarrito} total={total} manipularTotal={manipularTotal} />
            </Route>
            <Route path="/historial">
              <History carrito={carrito} guardarCarrito={guardarCarrito} />
            </Route>
            <Route path="/">
              <Pending carrito={carrito} guardarCarrito={guardarCarrito}  />
            </Route>
      </Switch>
        </div>
    );
}

export default Routes;