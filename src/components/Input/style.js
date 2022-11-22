import styled from "styled-components"

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0 0;
    label{
        font-size: .5;
        font-weight: 500;
        color: var(--grey-1);
    }
`

export const StyleInput = styled.input`
    max-width: 100%;
    border: solid 1.5px var(--grey-2);
    height: 1.5rem;
`