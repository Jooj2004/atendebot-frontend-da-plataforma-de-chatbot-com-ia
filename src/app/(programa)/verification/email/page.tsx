"use client"
import { motion } from "framer-motion";
import { Logo } from "@/components/layout/logo"
import { Button } from "@/components/ui/button"
import { useCompanyStore } from "@/store/company"
import { useRouter } from "next/navigation"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useState } from "react";

const EmailVerify = () => {
    const router = useRouter()

    const[codOTP, setCodOTP] = useState('')

    const company = useCompanyStore()
    return(
        <div className="py-3 text-white px-8 min-h-screen bg-gradient-to-br from-[#2825eb] via-[#1915eb] to-[#5403d6]">
            <header className="flex items-center justify-between h-7 mb-10">
                <Logo/>
                <Button onClick={()=> router.push('/home')} className="cursor-pointer text-white" variant="link">Sair</Button>
            </header>
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] mx-auto flex flex-col sm:flex-row"
            >
            <div className="max-w-lg md:mx-auto md:border md:border-white/40 md:rounded-md md:shadow-2xl md:p-5">
                <div>
                    <h1 className="text-3xl mb-4 lg:text-5xl text-white font-semibold">Confirme seu cadastro</h1>
                    <p className="text-sm mb-4 lg:text-lg">Insira o código enviado para {company.company?.email} </p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2,duration: 0.8 }}
                    className="w-full flex items-center justify-center sm:flex-row mb-4"
                >
                    <InputOTP
                        maxLength={6}
                        value={codOTP}
                        onChange={(e) => setCodOTP(e)}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0}/>
                            <InputOTPSlot index={1}/>
                            <InputOTPSlot index={2}/>
                            <InputOTPSlot index={3}/>
                            <InputOTPSlot index={4}/>
                            <InputOTPSlot index={5}/>
                        </InputOTPGroup>
                    </InputOTP>
                </motion.div>
                <div>
                    <Button className="bg-pink-500 w-full mb-4">Confirmar</Button>
                    <div onClick={()=> alert('funciona')}>
                        <p className="group mb-4 text-xs cursor-pointer">
                            Não receber o código?{' '}
                            <span className="group-hover:underline cursor-pointer text-blue-600">
                                Reenviar
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
        </div>
    )
}

export default EmailVerify