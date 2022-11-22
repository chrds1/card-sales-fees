import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    min-width: 280px;
    margin: 2rem auto;
    border: solid 1.5px var(--grey-2);
    display: flex;
    box-sizing: border-box;
`

export const StyleForm = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 1rem;
    box-sizing: border-box;
    
    span{
        font-size: .675rem;
        font-weight: 500;
        color: var(--grey-2);
        margin-top: .5rem;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--grey-1);
    }
    button{
        width: 50%;
        min-width: 140px;
        font-weight: 500;
        font-size: 1.2rem;
        background-color: var(--blue-1);
        border: solid 1.5px var(--blue-1);
        color: var(--white);
        margin: 1rem auto;
        cursor: pointer;
        box-sizing: border-box;

        &:hover{
            background-color: var(--blue-0);
            color: var(--grey-0);
            border: solid 1.5px var(--grey-2);
            
        }
    }
`

export const StyleResults = styled.div`
    box-sizing: border-box;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    h3{
        font-size: 1rem;
        font-weight: 600;
        color: var(--blue-1);
        font-style: italic;
        margin: 1.5rem auto;
        border-bottom: solid 1px var(--blue-1);
        width: 100%;
    }
    div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        span{
            margin-right: 1rem;
            font-size: 1rem;
            font-weight: 400;
            color: var(--blue-1);
            margin-bottom: .75rem;
        }
        .value{
            font-weight: 500;
        }
    }
`