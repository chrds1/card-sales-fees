import axios from "axios";
import { createContext, useState, useEffect } from "react";


const FormContext = createContext({});

const FormProvider = ({children})=>{
    const [responseData, setResponseData] = useState({});

    useEffect(()=>{
        axios
        .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout",
        )
        .then((res)=>{
            setResponseData(res.data)
        })
        .catch((error)=>{

        })
    })

    return(
        <FormContext.Provider value={{responseData}}>
            {children}
        </FormContext.Provider>
    )

}

export {FormContext, FormProvider}