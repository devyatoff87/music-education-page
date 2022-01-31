import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
    width: ${({ width }) => width && width};
    max-width: 1920px;
    background: ${({ background }) => background && background};
    margin: 50px auto;
`
export default MainContainer;
