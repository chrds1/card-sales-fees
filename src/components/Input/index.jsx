import { Container, StyleInput } from "./style"


export const Input =({label, placeholder, error, register, name, ...rest})=>{
    return(
        <Container>
            {label && <label>{label}</label>}
            <StyleInput {...rest} {...register(name)}/>
            {error && <span className="erro">{error.message}</span>}
        </Container>
    )
}