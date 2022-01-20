import React from 'react'
import "./ColumnBox.scss"


function ColumnBox({ children }) {
    return (
        <div className={`column_box`}>
            {children}
        </div>
    )
}

export default ColumnBox
