import React from 'react';
import { Col,BackTop,Tag } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Item from './Item'

function Launch({comida,carrito,guardarCarrito,total,manipularTotal}) {
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
        <div className="site-card-wrapper-launch">
           <Col >
            {comida.map(platillo=>(
                <Item
                platillo={platillo}
                key={platillo.id}
                comida={comida}
                carrito={carrito}
                guardarCarrito={guardarCarrito}
                total={total}
                manipularTotal={manipularTotal}  
                />
            ))}
            </Col>
            <BackTop>
                <div style={style}><VerticalAlignTopOutlined /><Tag color="geekblue">Inicio</Tag></div>
            </BackTop>
        </div>
    );
}

export default Launch;