import { createPortal } from 'react-dom';

import PerfVisualizer from '../Components/PerfVisualizer';

const useProfilerCallback = () => {
    const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
        console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);

        createPortal(<PerfVisualizer id = {id} phase = {phase} actualDuration = {actualDuration} ></PerfVisualizer>, document.getElementById('showThePerf'))
    }

    return {onRender}
}

export default useProfilerCallback