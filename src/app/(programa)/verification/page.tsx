"use client"

import { sendEmail } from "@/services/auth"
import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Verification = () => {
    let Exec = false

    const router = useRouter()
    const token = useTokenStore()
    const company = useCompanyStore()

    useEffect(()=> {
        if(Exec) return
        Exec = true
        const run = async () => {
            if(token.token != null ){
                localStorage.removeItem('token')
                router.push('/')
                //Tem token. checar se é valido e vai para o programa
            }else{
                if(company.company?.verification === false){
                    const email = await sendEmail(company.company.id)
                    if(email != null || email != undefined){
                        router.push(`/verification/email?id=${email}`)
                    }
                }
                //Verifica se a empresa esta verificada, no primeiro acesso não vai estar
                //Vai para a pagina de validar email
            }
        }
        run()
    }, [])

    console.log(company.company)
    
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin shadow-lg"></div>
            <p className="mt-6 text-xl font-semibold tracking-widest drop-shadow-lg">
                Carregando...
            </p>
        </div>
    )
}

export default Verification