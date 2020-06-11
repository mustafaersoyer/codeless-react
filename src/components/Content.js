import React, { useState } from "react";
import "../App.css";

import axios from "axios";

import { List, Button } from "antd";
import DeleteIcon from "./DeleteIcon";

class CollectionData extends React.Component {
  state = {
    data: [],
  };

  constructor(props){
    super(props);
    
  }   

  componentDidMount() {
    let username = "denemeDB";
    let collectionName = this.props.match.params.id;
    axios
      .get(
        "http://192.168.1.13:49884/api/Data/GetModelList?username=" +
          username +
          "&collectionName=" +
          collectionName
      )
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      });
  }

  deleteData = (e) => {

    let username = "denemeDB";
    let collectionName = this.props.match.params.id;

    axios({
      method: "delete",
      url:
        "http://192.168.1.13:49884/api/Data/DeleteModel?id="+e.currentTarget.id+"&username=" +
        username +
        "&collectionName=" +
        collectionName,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log("tıklandı abii"+e.currentTarget.id);
  }

  render() {
    let myModel;
    //const [jsonModel,setJsonModel] = useState(0);

    let username = "denemeDB";
    let collectionName = this.props.match.params.id;
    let id="denemedir";

    const onDataChange = (e) => {
      console.log(e.target.value);
      myModel = e.target.value;
    };

   

    const addModel = () => {
      var modifiedData = "{" + myModel + "}";
      axios({
        method: "post",
        url:
          "http://192.168.1.13:49884/api/Data/AddModel?username=" +
          username +
          "&collectionName=" +
          collectionName,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(modifiedData),
      }).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    let myId;
    let isimbulamadim;

    const getContent = (json) => {
      return Object.keys(json).map((key) => {
        return Object.keys(json[key]).map((csdhild) => {
          if (csdhild==="_id") {
            myId = json[key][csdhild]
            isimbulamadim = true;
          }else{
            isimbulamadim = false;
          }
          return (
            
            <div>
              <div className="child" > {csdhild}  : </div> {json[key][csdhild]}
              
                { isimbulamadim ? <div className="delete"> <Button id={myId} onClick={this.deleteData}><DeleteIcon/></Button></div> : <div></div>}
            </div>
          );  
        });
      });
    };

    return (
      <div>
        <List
          bordered
          dataSource={getContent(this.state.data)}
          renderItem={(item) => (
            <List.Item>

              <div>
                {item}
              </div>
               
            </List.Item>
          )}
        />

        <br />
        <textarea
          id="jsonData"
          name="jsonData"
          rows="4"
          cols="50"
          onChange={onDataChange}
          placeholder="
        ''_id'':''örnek'',
        ''isim'':''örnek veri''
      "
        />
        <br />
        <Button type="primary" onClick={addModel}>
          Veri Ekle
        </Button>
      </div>
    );
  }
}
export default CollectionData;
