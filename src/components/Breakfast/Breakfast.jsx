import React from 'react';
import { Col,BackTop,Tag } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Item from './Item'

function Breakfast({desayuno,carrito,guardarCarrito}) {
    const style = {
        height: 40,
        width: 70,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };
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
            <BackTop>
                <div style={style}><VerticalAlignTopOutlined /><Tag color="geekblue">Inicio</Tag></div>
            </BackTop>
        </div>
    );
}

export default Breakfast;