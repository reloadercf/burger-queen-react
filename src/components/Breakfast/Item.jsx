import React from 'react';
import { Card,Button,Col,Tooltip,Statistic,notification } from 'antd';

const Item = ({platillo,desayuno,carrito,guardarCarrito,total,manipularTotal}) => {
    let seleccionarPlatillo=id=>{ // tu estructura es un array,  
        // OLVIDA DE QUE ES ESPAÑOL DESAYUNO EN LENGUAJE DE TU PREFERENCIA (ESPAÑOL) ES SINGULAR, PERO DENTRO TIENE UN ARRAY, ENTONCES NI EN EL LENGUAJE DE TU PREFERENCIA EXISTE LA SEMANTICA
        let platillo=desayuno.find(producto=> producto.id===id) //MALDITA SEA CON EL ESPAÑOL
        // SU PTM CUANDO UN EMPLEADOR VEA ESTO SE VA A CAGAR Y DESCARTAR EN AUTOMÁTICO, YO LO HARÍA.
        guardarCarrito(platillo) // PÉSIMO EL PUTO ESPAÑOL
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