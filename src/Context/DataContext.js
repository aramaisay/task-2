import {createContext, useReducer} from 'react';

import rawData from '../Data/data.json';

const DataContext = () => {

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
            return prevState;
          default:
            console.log('wrong type');
            return prevState;
        }
    }

    const [data, setData] = useReducer(reducer, rawData);

    return createContext({data, setData});
}

export default DataContext;