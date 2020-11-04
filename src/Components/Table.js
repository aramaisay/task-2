import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row"

const Table = ({data}) => {
  console.log(data)
  return (
    <div>
      {data.map((item,index) => {
        if(index!==0 && index!==data.length-1){
          return <Row data = {item} ></Row>
        }
        else if(index === 0){
          return <Header data = {item} ></Header>
        }
        return <Footer data = {item} ></Footer>
      })}
    </div>
  );
};

export default Table;