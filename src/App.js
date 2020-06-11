import React from "react";
import "./App.css";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Divider, Layout } from "antd";

import Siderr from "./components/Sider";
import Footerr from "./components/Footer";
import CollectionData from "./components/Content";
import CollectionList from "./components/CollectionList";

const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
    list: [],
   
  };

  

  handleSubmit(e) {
    e.preventDefault();
    const { renderItem } = e.target;
  }

  render() {
    const getDbList = (json) => {
      return Object.keys(json).map((key) => {
        return <Link to={`/data/${json[key]}`}> {json[key]}</Link>;
      });
    };


    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Siderr />

          <Layout className="site-layout">
           
            <Content style={{ margin: "0 16px" }}>
              
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Divider orientation="left">Collection List</Divider>
               
                  <Route exact path="/" component={CollectionList}/>
                  <Route path="/data/:id" component={CollectionData} />
                
              </div>
            </Content>
            <Footerr />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
