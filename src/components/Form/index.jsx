import { useContext } from "react";
import { FormContext } from "../../providers/FormContext";
import { Input } from "../Input";
import {Container, StyleForm, StyleResults } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

export const Form = ()=>{
    const formSchema = yup.object().shape({
        amount: yup.number().typeError("Insira um valor válido").required("Digite o valor da transação"),
        installments: yup.number().typeError("Insira um valor válido").max(12, "Máximo 12 parcelas").min(1, "Mínimo 1 parcela").required("Digite o número de parcelas máximo 12"),
        mdr: yup.number("Insira um valor válido").typeError("Insira um valor válido").required("Digite a taxa"),
    })

    const { register, handleSubmit, formState:{ errors }}= useForm({
        resolver: yupResolver(formSchema)
    });

    const {
        responseData, 
        setData,
    } = useContext(FormContext);

    const onSubmitFunction = async (data) =>{
        const newData = {
            amount: data.amount,
            installments: data.installments,
            mdr: data.mdr,
            days: [1, 30, 60, 90]
        }
        await setData(newData)
    }

    return(
        <Container>
            <StyleForm onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Simule sua antecipação</h2>
                <Input 
                    label="Informe o valor da venda *"
                    name="amount"
                    error={errors.amount}
                    register={register}
                />
                <Input 
                    label="Em quantas parcelas *"
                    name="installments"
                    error={errors.installments}
                    register={register}
                />

                <span>Máximo de 12 parcelas</span>

                <Input 
                    label="Informe o percentual de MDR *"
                    name="mdr"
                    error={errors.mdr}    
                    register={register}
                />
                <button>Simular</button>
            </StyleForm>
            <StyleResults>
                <h3>VOCÊ RECEBERÁ</h3>
                <div>
                    <span>Amanhã:</span>
                    <span className="value">R${responseData[1]}</span>
                </div>
                <div>
                    <span>15 dias:</span>
                    <span className="value">R${responseData[30]}</span>
                </div>
                <div>
                    <span>30 dias:</span>
                    <span className="value">R${responseData[60]}</span>
                </div>
                <div>
                    <span>90 dias</span>
                    <span className="value">R${responseData[90]}</span>
                </div>
            </StyleResults>
        </Container>
    )
}