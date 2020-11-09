import React from "react";
import uuid from "react-uuid";

const Col = ({value, rowIndex, colIndex, setData, item}) => {
  return( 
    <div key = {uuid()} className = 'colCont' >
      {!item?
      <input className = 'colInput' value = {value} onChange = {(e) => { e.preventDefault(); setData({type: 'change', rowIndex, colIndex, value: e.target.value}) }} ></input>:
      item()}
    </div>);
};

export default Col;