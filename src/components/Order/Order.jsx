import React,{useState} from 'react';
import { Modal,Divider } from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';

function Order({carrito,total}) {
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
                        <p className='container-order'>{platillo.nombre} <Divider type="vertical" />${platillo.precio}</p>
                        ))}
                        <center><strong>Total a pagar ${total}</strong></center>  
                    </span>
                :<p>Tu Orden esta vacia</p>}
                
            </Modal>
        </div>
    );
}

export default Order;