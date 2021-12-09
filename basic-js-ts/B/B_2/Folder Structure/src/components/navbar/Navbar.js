import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DollarCircleOutlined,
    HomeOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Navbar.scss';
import { Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;

export default function Navbar(props) {
    const [collapsed, setCollapsed] = useState(false)
    const [key, setKey] = useState('/')
    const toggle = () => {
        setCollapsed(!collapsed)
    };

    useEffect(() => {
        if (window.location.pathname) {
            let { pathname } = window.location
            setKey("/" + pathname.split('/')[1])
        }
    }, [props])

    return (
        <Layout className='layout'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <div className="logo-text">
                        Chuck Norris
                    </div>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']} selectedKeys={[key]}>
                    <Menu.Item key="/" icon={<HomeOutlined />}>
                        <Link to="/">
                            Joke
                        </Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, paddingLeft: 20 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => toggle(),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout >
    )
}
