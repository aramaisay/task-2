import React, { lazy, Suspense } from "react";

import data from './Data/data.json';

import './style.css';


const Table = lazy( async () => {
  const values = await Promise.all([import('./Components/Table'), debounce()]);
  return values[0];
});

const debounce = () => {
  const promise = new Promise((resolve,reject) => {
    const timeoutId = setTimeout(()=>{
      clearTimeout(timeoutId);
      resolve();
    },2000)
  })
  return promise;
}

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Table data = {data} />
      </Suspense>
    </div>
  );
}
