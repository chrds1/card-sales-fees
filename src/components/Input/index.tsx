import { Container, StyleInput } from "./style"
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label ?: string;
    placeholder ?: string;
}

export const Input =({label, placeholder}: InputProps)=>{
    return(
        <Container>
            {label && <label>{label}</label>}
            <StyleInput placeholder={placeholder}/>
        </Container>
    )
}

