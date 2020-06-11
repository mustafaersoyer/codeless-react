import React, { Component } from 'react'

import axios from "axios";
import { Input,Button } from 'antd';
import { Link } from "react-router-dom";
import DeleteIcon from './DeleteIcon';
export default class CollectionList extends Component {

    state = {
        collectionList: [],
    }

    componentDidMount() {
        let username = "denemeDB";

        axios
          .get(
            "http://192.168.1.13:49884/api/Admin/GetCollectionList?dbName=" +
              username
          )
          .then((res) => {
            const collectionList = res.data;
            this.setState({ collectionList });
            console.log("liste" + res.data);
          });
    }

    deleteCollection = (e) => {

        let username = "denemeDB";
        axios({
          method: "delete",
          url:
            "http://192.168.1.13:49884/api/Admin/DropCollection?&username=" +
            username +
            "&collectionName=" +
            e.currentTarget.id,
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
        let collectionName;
        let username = "denemeDB";

        const onDataChange = (e) => {
            console.log(e.target.value);
            collectionName = e.target.value;
        }

        const createCollection = () => { 

            axios({
              method: "post",
              url:
                "http://192.168.1.13:49884/api/Admin/CreateCollection?username=" +
                username +
                "&collectionName=" +
                collectionName,
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify(collectionName),
            }).then(
              (response) => {
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );
        }

        return (
            <div>
                {this.state.collectionList.map((collection) => <div><Link to={`/data/${collection}`}> <li>{collection}</li> </Link> <Button id={collection} onClick={this.deleteCollection}><DeleteIcon/></Button> </div> )} 
                <br />
                <Input placeholder="Collection Name" onChange={onDataChange}/>
                <br />
                
                <Button type="primary" onClick={createCollection}>
                    Veri Ekle
                </Button>
            </div>
        )
    }
}
