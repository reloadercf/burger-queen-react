import React,{useState} from 'react';
import './app.css'
import { Layout, Menu,Tag } from 'antd';
import {
  HistoryOutlined,
  ThunderboltOutlined,
  CoffeeOutlined,
  StarOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import Routes from './components/Routes'
import Order from './components/Order/Order'


const { Header, Content, Footer, Sider } = Layout;
const L=`< Laboratoria >`
function App() {
    const [desayuno,guardarDesayuno]=useState([
        {id:1, nombre:"Café americano", precio:5},
        {id:2, nombre:"Café con leche", precio:7},
        {id:3, nombre:"Sandwich de jamón y queso", precio:10},
        {id:4, nombre:"Jugo de frutas natural", precio:7}
    ])
    const [comida,guardarComida]=useState([
        {id:5, nombre:"Hamburguesa simple", precio:10},
        {id:6, nombre:"Hamburguesa doble", precio:15},
        {id:7, nombre:"Papas fritas", precio:5},
        {id:8, nombre:"Aros de cebolla", precio:5},
        {id:9, nombre:"Agua 500ml", precio:5},
        {id:10, nombre:"Agua 700ml", precio:7},
    ])
    let [carrito,guardarCarrito]=useState([])
    let [total, manipularTotal]=useState(0)

    return ( 
        <div>
             <Layout>
                <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                >
                
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1" icon={<CoffeeOutlined />}>
                    <Link to="/desayunos">Desayunos</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<StarOutlined />}>
                    <Link to="/comidas">Comidas</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ThunderboltOutlined />}>
                    <Link to="/">Ordenes Pendientes</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<HistoryOutlined />}>
                    <Link to="/historial">Historial</Link>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
               
            <Header className="site-header" style={{ padding: 0,paddingLeft:30}} >
                <span>Burger Queen</span>
                <span className='container-menu'>
                    <Order
                        carrito={carrito}
                        guardarCarrito={guardarCarrito}
                        total={total}
                        manipularTotal={manipularTotal}
                    />
                    <Tag color="magenta">{carrito.length}</Tag>
                </span>
            </Header>
                
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <Routes
                        desayuno={desayuno}
                        guardarDesayuno={guardarDesayuno}
                        comida={comida}
                        guardarComida={guardarComida}
                        carrito={carrito}
                        guardarCarrito={guardarCarrito}
                        total={total}
                        manipularTotal={manipularTotal}
                        />
                    </div>
                </Content>
            <Footer style={{ textAlign: 'center' }}>Carlos Mendoza ©2020 Created for <Tag color="gold">{L}</Tag></Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;