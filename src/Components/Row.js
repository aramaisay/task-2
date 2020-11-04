import React, {lazy, Suspense} from "react";

import useDebounce from "../Hooks/useDebouce";

const debounce = useDebounce();

const Col = lazy( async ()=>{
  const values = await Promise.all([import('./Col'), debounce])
  return values[0];
});

const Row = () => {
  return <div>Row</div>;
};

export default Row;