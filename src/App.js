import React from 'react';
import './App.css';

import axios from "axios";

import { List, Divider,Layout, Menu } from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {
  state = {
    collapsed: false,
    persons: []
  };


  componentDidMount() {
    //axios.get("http://192.168.1.13:49884/api/Data/GetModelList?dbName=denemeDB&collectionName=characters")
    axios.get("http://192.168.1.13:49884/api/Admin/GetDatabaseList")
    
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    
    /*const jsonDOM = json => {
      return Object.keys(json).map(key => {
        return Object.keys(json[key]).map(child => {   
          return (
            <> 
            <p>{child} : {json[key][child]}</p>
            </>
          );     
        });
      });
    };*/
    const getDbList = json => {
      return Object.keys(json).map(key => {
          return (
            <p> {json[key]}</p>
          );     
        });
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Database
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

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      
           <Divider orientation="left">Collection List</Divider>

            <List
            bordered
            dataSource={getDbList(this.state.persons)}
            renderItem={item => (
              <List.Item>
                <p style={{textAlign:"center"}}>{item}</p>    
              </List.Item>
            )} />         
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Codeless ©2020 Created by Mustafa ERSOY</Footer>
        </Layout>
      </Layout>
    );
  }
}
//veriyi gösterdiğin yerde, router ile component çağır, o componentde veriyi çek ve yazdır sadece 

export default App;
