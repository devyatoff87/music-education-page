import React from 'react'
import styled from 'styled-components'



const ColumnBox = styled.div`
    box-sizing: border-box;
    width: ${({ styledWidth }) => styledWidth && styledWidth};
    padding: 0 15px;
    margin-bottom: 40px;

    @media only screen and (max-width: 1200px) {
        width: 50%;
        padding: 0 15px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
        }
    `

export default ColumnBox
