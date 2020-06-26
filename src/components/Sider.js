
import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

import {  Layout, Menu } from "antd";

import {
    PieChartOutlined,
  } from "@ant-design/icons";

  const { Sider } = Layout;


class Siderr extends React.Component{
    state = {
        collapsed: false,
      };
    render(){
        return(
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                 <Link to="/" style={{color:"#fff"}}>Database</Link> 
                </Menu.Item>
              </Menu>
            </Sider>
        );
    }
}
export default Siderr;
