import React from 'react';
import styled from '@emotion/styled';
import ProtoTypes from 'prop-types';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background: white;
    max-width: 800px;
    
    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem
    }
`;

const Frase = (props) => {

    if (Object.keys(props.frase).length === 0) return null;

    return (  
        <ContenedorFrase>
            <h1>{props.frase.quote}</h1>
            <p>{props.frase.author}</p>
        </ContenedorFrase>
    );
}

Frase.protoTypes = {
    frase: ProtoTypes.object.isRequired
}
 
export default Frase;