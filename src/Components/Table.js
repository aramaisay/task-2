import React from "react";
import uuid from "react-uuid";

import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row"

const Table = ({data, setData}) => {
  console.log(data)
  return (
    <div className = "tableCont" >
      {data.map((item,index) => {
        if(index!==0){
          return <Row key = {uuid()} rowIndex = {index} data = {item} setData = {setData} ></Row>
        }
        else if(index === 0){
          return <Header key = {uuid()} rowIndex = {index} data = {item} setData = {setData} ></Header>
        }
      })}
      <Footer setData = {setData}></Footer>

    </div>
  );
};

export default Table;