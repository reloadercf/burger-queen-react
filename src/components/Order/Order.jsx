import React,{useState} from 'react';
import { Modal,Divider,Result,Tag } from 'antd';
import {AppstoreOutlined,DeleteOutlined} from '@ant-design/icons';

function Order({carrito,guardarCarrito,total}) {
    let [visible, manipularVisible]=useState(false)
    
    

    let showModal = () => {
        manipularVisible(true)
      };

    let handleOk = () => {
       manipularVisible(false)
      }; 

    let handleCancel =()=> {
        manipularVisible(false)
      };  
    
    let eliminarPlatillo=id=>{
        let platillo=carrito.filter(producto=>producto.id!==id)
        guardarCarrito(platillo)
    }  

    return (
        <div>
            <AppstoreOutlined
             style={{fontSize:30}}
             onClick={()=>showModal()}
            />

            <Modal
                title="Orden"
                visible={visible}
                onOk={()=>handleOk()}
                onCancel={()=>handleCancel()}
            >
                
                {carrito.length!==0?
                    <span>
                      {carrito.map(platillo=>(
                        <p className='container-order'>
                            {platillo.nombre}
                            <Divider type="vertical" />
                            <span>
                                <span style={{paddingRight:20}}>${platillo.precio}</span>
                                <Tag color="red"><DeleteOutlined onClick={()=>eliminarPlatillo(platillo.id)}/></Tag>
                            </span>
                        </p>
                        ))}
                        <center><strong>Total a pagar ${total}</strong></center>  
                    </span>
                :
                    <Result
                    status="404"
                    title="Orden vacia"
                    subTitle="No haz agregado ningun platillo"
                    />
                }
                
            </Modal>
        </div>
    );
}

export default Order;