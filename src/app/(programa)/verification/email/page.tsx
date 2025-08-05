"use client"
import { useCompanyStore } from "@/store/company"

const EmailVerify = () => {
    const company = useCompanyStore()
    return(
        <div className="py-3 text-white px-8 min-h-screen bg-gradient-to-br from-[#2825eb] via-[#1915eb] to-[#5403d6]">
            <header>
                Logo e botão Sair que vai para tela de login
            </header>
            <div>
                <div>
                    <h1>Confirme seu cadastro</h1>
                    <p>Insira o código enviado para {company.company?.email || '*não há email da company ainda*'} </p>
                </div>
                <div>
                    <div className="border border-white/40 rounded-md">
                        Caixa para digitar os numeros
                    </div>
                </div>
                <div>
                    Botão de CONFIRMAR
                    <p>Não receber o código? <span className="hover:underline cursor-pointer">Reenviar</span></p>
                        Veja como fazer o hover funcionar no reenviar mesmo colocando o mouse no p. voce viu isso nas aulas de tailwind
                </div>
            </div>
        </div>
    )
}

export default EmailVerify