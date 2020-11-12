import React, {lazy, Suspense} from "react";
import uuid from "react-uuid";

import CreateError from '../ErrorHandling/CreateError'

import useDebounce from "../Hooks/useDebouce";

const Col = lazy( async ()=>{
  const debounce = useDebounce(5000);
  const values = await Promise.all([import('./Col'), debounce])
  return values[0];
});

const Row = ({data, rowIndex, setData, containsError}) => {
  return (
  <div className = 'rowCont' >
    {data.map((item, index) => {
      return(
        !containsError?
      <Suspense key = {uuid()} fallback = {<div className = 'loader' ></div>} >
          <Col setData = {setData} rowIndex = {rowIndex} colIndex = {index}  value = {item} > </Col>
      </Suspense>:
      <CreateError></CreateError>
      )
    })}
  </div>);
};

export default Row;