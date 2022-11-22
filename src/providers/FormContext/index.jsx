import axios from "axios";
import { createContext, useState, useEffect } from "react";


const FormContext = createContext({});

const FormProvider = ({children})=>{
    const [data, setData] = useState({})
    const [responseData, setResponseData] = useState({1: 0.00, 15: 0.00, 30: 0.00, 90:0.00});

    const fetchApi = async ()=>{
        await axios
        .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=5000",
            data
        )
        .then((res)=>{
            setResponseData(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    useEffect(()=>{
        fetchApi();
    }, [data])

    return(
        <FormContext.Provider value={{responseData, setData}}>
            {children}
        </FormContext.Provider>
    )

}

export {FormContext, FormProvider}