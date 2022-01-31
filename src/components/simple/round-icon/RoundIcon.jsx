import React from 'react';
import "./RoundIcon_styles.scss"


function RoundIcon({ IconComponent, onClickCallBack }) {
    return <div onClick={onClickCallBack} className='round_icon'>
        {IconComponent}
    </div>
}
export default RoundIcon;
