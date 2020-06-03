import React from 'react';
import { Card,Button,Col,Tooltip,Statistic,notification } from 'antd';

const Item = ({platillo,comida,carrito,guardarCarrito,total,manipularTotal}) => {
    let seleccionarPlatillo=id=>{
        let platillo=comida.filter(producto=> producto.id===id)[0]
        guardarCarrito([...carrito,platillo])
    }

    let openNotificatioSuccess = producto => {
        notification['success']({
          message: producto,
          description:
            'Se agrego correctamente',
        });
    }
    

    let handleTotal=valor=>{
        let value={total}
        let suma=value.total+valor
        manipularTotal(suma)
    }

    return ( 
        <div>
            <Col span={15} style={{paddingBottom:10}}>
                <Card title={platillo.nombre} >
                    <Statistic title="Precio $" value={platillo.precio} precision={2}/>
                    <Tooltip title="¿Agregar a la orden?" color={'magenta'} >
                        <Button type="primary" 
                            onClick={ ()=>{
                                            seleccionarPlatillo(platillo.id)
                                            openNotificatioSuccess(platillo.nombre)
                                            handleTotal(platillo.precio)
                                            } 
                        }>
                            Agregar
                        </Button>
                    </Tooltip>
                </Card>
            </Col>
        </div>
     );
}
 
export default Item;