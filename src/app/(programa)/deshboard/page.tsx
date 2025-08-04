"use client"

import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"
import { useEffect } from "react"

const Deshboard = () => {
    const token = useTokenStore()
    const company = useCompanyStore()

    useEffect(()=> {
        if(token.token != null ){
            //Tem token. checar se é valido e vai para o programa
        }else{
            //Verifica se a empresa esta verificada, no primeiro acesso não vai estar
            //Vai para a pagina de validar email
        }
    }, [])
    
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin shadow-lg"></div>
            <p className="mt-6 text-xl font-semibold tracking-widest drop-shadow-lg">
                Carregando...
            </p>
        </div>
    )
}

export default Deshboard