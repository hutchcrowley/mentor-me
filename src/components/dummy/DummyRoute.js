import React from 'react';
import styled from 'styled-components'


const DummyRoute = () => {
    const DIV = styled.div`
        height: 600px;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        font-size: 5rem;
        -webkit-text-stroke: 1px black;
        border-radius: 2rem;
    `;
    return <DIV>
        Please wait while your registration processes.
    </DIV>
}

export default DummyRoute;