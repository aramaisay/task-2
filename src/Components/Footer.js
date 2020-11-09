import React, {lazy, Suspense} from "react";

import useDebounce from "../Hooks/useDebouce";
import Add from './Add';

const Col = lazy( async ()=>{
  const debounce = useDebounce(5000);
  const values = await Promise.all([import('./Col'), debounce])
  return values[0];
});

const Footer = ({setData}) => {
  return (
  <div className = 'rowCont' >
      <Suspense fallback = {<div className = "loader" ></div>} >
        <Col item = {() => <Add onTouch = {() => {setData({type: 'add row'})}} ></Add>} ></Col>
    </Suspense>
  </div>);
};

export default Footer;