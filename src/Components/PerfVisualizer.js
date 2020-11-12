import React, { useEffect, useState } from 'react';

const PerfVisualizer = ({id, phase, actualDuration}) => {
    
    const [timeReached, setTimeReached] = useState(false);

    console.log('created');
    
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimeReached(true);
        },2000)
        return () => {
            timeOut.clearTimeout();
        }
    }, [])

    return ( timeReached?null: <div> {id} {phase} {actualDuration} </div>);
}

export default PerfVisualizer;