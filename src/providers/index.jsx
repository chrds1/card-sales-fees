import { FormProvider } from "./FormContext"

const Providers = ({children})=>{
    return(
        <FormProvider>
            {children}
        </FormProvider>
    )
}

export default Providers