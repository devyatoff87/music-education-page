import React from 'react';
import "./CloseHoc_style.scss"
function CloseHoc({ children, onCallbackClick }) {
    return <div onClick={() => onCallbackClick()} className='close_hoc'>
        {children}
    </div>;
}

export default CloseHoc;
