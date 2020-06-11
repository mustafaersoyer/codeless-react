
import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

import {  Layout, Menu } from "antd";



import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
  } from "@ant-design/icons";

  const { Sider } = Layout;

  const { SubMenu } = Menu;


class Siderr extends React.Component{
    state = {
        isClick: false,
        collapsed: false,
        persons: [],
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
        
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                 Push Notification
                </Menu.Item>
        
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
        );
    }
}
export default Siderr;
