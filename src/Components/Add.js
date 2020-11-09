import React from 'react';

import plusSign from '../Content/plus.png';

const Add = ({onTouch}) => {
    return(
    <img onClick = {onTouch} className = "plusImg" src = {plusSign} ></img>
);
}

export default Add;