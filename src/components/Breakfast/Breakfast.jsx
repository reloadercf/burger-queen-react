import React from 'react';
import { Col } from 'antd';
import Item from './Item'
function Breakfast({desayuno,carrito,guardarCarrito}) {
    return (
        <div className="site-card-wrapper">
           <Col >
            {desayuno.map(platillo=>(
                <Item
                platillo={platillo}
                key={platillo.id}
                desayuno={desayuno}
                carrito={carrito}
                guardarCarrito={guardarCarrito} 
                />
            ))}
            </Col>
        </div>
    );
}

export default Breakfast;