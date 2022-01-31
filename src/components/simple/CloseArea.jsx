import React from 'react';

const styles = {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
}

function CloseArea({ children, onCallbackClick }) {
    return <div style={styles} onClick={() => onCallbackClick()} className='close_hoc'>
        {children}
    </div>;
}

export default CloseArea;
