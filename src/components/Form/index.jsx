import { Input } from "../Input"
import {Container, StyleForm, StyleResults } from "./style"

export const Form = ()=>{

    return(
        <Container>
            <StyleForm>
                <h2>Simule sua antecipação</h2>
                <Input label="Informe o valor da venda *"/>
                <Input label="Em quantas parcelas *"/>
                <span>Máximo de 12 parcelas</span>
                <Input label="Informe o percentual de MDR *"/>
            </StyleForm>
            <StyleResults>
                <h3>VOCÊ RECEBERÁ</h3>
                <div>
                    <span>Amanhã:</span>
                    <span className="value">R$0.00</span>
                </div>
                <div>
                    <span>15 dias:</span>
                    <span className="value">R$0.00</span>
                </div>
                <div>
                    <span>30 dias:</span>
                    <span className="value">R$0.00</span>
                </div>
                <div>
                    <span>90 dias</span>
                    <span className="value">R$0.00</span>
                </div>
            </StyleResults>
        </Container>
    )
}