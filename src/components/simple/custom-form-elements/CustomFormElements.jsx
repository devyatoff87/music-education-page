import React from 'react';
import "./CustomFormElements.scss"

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
    const { title, elements, ...otherProps } = props;

    return (
        <div className="input_group">
            <label>{title}</label>
            <select className='category' name='category'>
                <option disabled>Choose one:</option>
                {elements.map((p, index) => {
                    return <option key={index}>
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
            <textarea {...otherProps} ></textarea>
        </div>
    )
}