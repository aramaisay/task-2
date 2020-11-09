import React, { lazy, Suspense, useReducer } from "react";

import useDebounce from "./Hooks/useDebouce";

import rawData from './Data/data.json';
import './style.css';
import loading from './Content/loading.gif';

const Table = lazy( async () => {
  const debounce = useDebounce(1000);
  const values = await Promise.all([import('./Components/Table'), debounce]);
  return values[0];
});

export default function App() {
  const reducer = (state, action) => {
    const prevState = [...state];

    const {type, rowIndex, colIndex, value} = action;

    switch(type) {
      case 'change':
        prevState[rowIndex][colIndex] = value;
        return prevState;
      case 'add row':
        const newArr = prevState[0].map(() => '');
        prevState[prevState.length] = newArr;
        return prevState;
      case 'add col':
        prevState.map((item, index)=> {
          prevState[index][item.length] = '';
        })
        console.log('added col')
        return prevState;
      default:
        console.log('wrong type');
        return prevState;
    }
  }

  const [data, setData] = useReducer(reducer, rawData);

  return (
    <div className="App">
      <Suspense fallback={<div className="loading"><img src = {loading} /></div>}>
        <Table data = {data} setData = {setData} />
      </Suspense>
    </div>
  );
}
