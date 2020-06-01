import React from 'react';
import './app.css'
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Hello from'./components/Hello'

const { Header, Content, Footer, Sider } = Layout;

function App() {
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
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                    Desayunos
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Comida
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    Ordenes pendientes
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                    Historial
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0,paddingLeft:30 }} >Burger Queen</Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <Hello />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Carlos Mendoza ©2020 Created for Laboratoria</Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;