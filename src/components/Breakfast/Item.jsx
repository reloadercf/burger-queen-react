import React from 'react';
import { Card,Button,Col,Tooltip,Statistic } from 'antd';

const Item = ({platillo,desayuno,carrito,guardarCarrito}) => {
    let seleccionarPlatillo=id=>{
        let platillo=desayuno.filter(producto=> producto.id===id)[0]
        guardarCarrito([...carrito,platillo])
    }
    return ( 
        <div>
            <Col span={15} style={{paddingBottom:10}}>
                <Card title={platillo.nombre} >
                    <Statistic title="Precio $" value={platillo.precio} precision={2}/>
                    <Tooltip title="¿Agregar a la orden?" color={'magenta'} >
                        <Button type="primary" onClick={ ()=>seleccionarPlatillo(platillo.id) }>
                            Agregar
                        </Button>
                    </Tooltip>
                </Card>
            </Col>
        </div>
     );
}
 
export default Item;