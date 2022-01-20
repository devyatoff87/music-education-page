import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

export function CustomInput(props) {
    const { title, ...otherProps } = props
    return (
        <div className="input_group">
            <label>{title}</label>
            <input {...otherProps} />
        </div>
    )
}

export function CustomSelect(props) {
    const { title, elements, ...otherProps } = props
    return (
        <div className="input_group">
            <label>{title}</label>
            <select name='category'>
                {elements.map((p) => {
                    return <option>
                        {p.category}
                    </option>
                })}
            </select>
        </div>
    )
}

export function CustomTextarea(props) {
    const { title, ...otherProps } = props
    return (
        <div className="input_group">
            <label>{title}</label>
            <textarea {...otherProps} > </textarea>
        </div>
    )
}