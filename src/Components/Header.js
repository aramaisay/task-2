import React, {lazy, Suspense} from "react";
import uuid from 'react-uuid';

import useDebounce from "../Hooks/useDebouce";
import Add from './Add';

const Col = lazy( async () => {
  const debounce = useDebounce(5000);
  const values = await Promise.all([import('./Col'), debounce])
  console.log('col Loading')
  return values[0];
});

const Header = ({data, setData}) => {
  return(
  <div className = "rowCont headerCont" >
      {data.map((item, index) => {
        return (
        <Suspense key = {uuid()} fallback = {<div className = "loader" ></div>} > 
          <Col setData = {setData} colIndex = {index} rowIndex = {0} value = {item} ></Col>  
        </Suspense>)
      })}
    <Suspense fallback = {<div className = "loader" ></div>} >
      <Col  item = {() => <Add onTouch = {(e) => {e.preventDefault();setData({type: 'add col'})}} ></Add>} ></Col>
    </Suspense>
  </div>);
};

export default Header;
