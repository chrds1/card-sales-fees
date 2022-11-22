import { Container, StyleInput } from "./style"


export const Input =({label, placeholder})=>{
    return(
        <Container>
            {label && <label>{label}</label>}
            <StyleInput placeholder={placeholder}/>
        </Container>
    )
}