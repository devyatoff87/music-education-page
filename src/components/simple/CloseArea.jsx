import React, { useEffect } from 'react';

const styles = {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
}

function CloseArea({ onCallbackClick }) {

    return <div style={styles} onClick={() => onCallbackClick()} className='close_hoc'></div>
}

export default CloseArea;
