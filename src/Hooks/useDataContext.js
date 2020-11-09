import {useContext} from 'react';

import DataContext from '../Context/DataContext';


const useDataContext = () => {
    const Context = DataContext();

    const {data, setData} = useContext(Context);

    return {data, setData, Context};
}

export default useDataContext;