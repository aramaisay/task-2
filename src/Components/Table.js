import React from "react";
import uuid from "react-uuid";

import Header from "./Header";
import Footer from "./Footer";
import Row from "./Row"
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";

const Table = ({data, setData}) => {

  console.log(data)
  return (
    <div className = "tableCont" >
      {data.map((item,index) => {
        if(index!== 0 && index !== 2){
          return <Row key = {uuid()} rowIndex = {index} data = {item} setData = {setData} ></Row>
        }
        else if (index === 2) {
          return <ErrorBoundary fallback = {<div> Sorry smth went wrong </div>}  > <Row key = {uuid()} containsError = {true} rowIndex = {index} data = {item} setData = {setData}></Row> </ErrorBoundary>
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