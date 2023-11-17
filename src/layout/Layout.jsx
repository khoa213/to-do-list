import { Col, Row } from "antd";
import React, {useState} from "react";
import { Button,Menu } from "antd";

const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}

const items = [
    getItem('Project list','1')
]

const Layout = ({children}) => {
    const [collapsed,setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    } 
    return (
        <Row>
            <Col xl={2}>
                1
            </Col>
            <Col xl={4}>
                <div
                style={{width:256}}>
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items}
      />
                </div>
            </Col>
            <Col xl={18}>
                {children}
            </Col>
        </Row>
    )
}
export {Layout};