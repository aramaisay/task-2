import React, {lazy, Suspense} from "react";

import useDebounce from "../Hooks/useDebouce";

const debounce = useDebounce();

const Col = lazy( async ()=>{
  const values = await Promise.all([import('./Col'), debounce])
  return values[0];
});

const Header = ({data}) => {
  return(
  <div>
    {data.map((item) => {
      return <Suspense fallback = {<div className = "loader" ></div>} > <Col data = {item} ></Col> </Suspense>
    })}  
  </div>);
};

export default Header;
