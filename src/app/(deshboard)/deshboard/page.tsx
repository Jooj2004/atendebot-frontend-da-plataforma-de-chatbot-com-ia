"use client"
import { ItemPage } from "@/components/deshboard/itens-page"
import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"
import { useEffect, useState } from "react"
import {Mail, MessageSquare, MessageCircle, CheckCircle} from "lucide-react"
import { useInteractions } from "@/utils/queries"
import { Chart } from "@/components/deshboard/chart"

const Deshboard = () => {
    const company = useCompanyStore()
    const token = useTokenStore()
    useEffect(() => {
        company.initializeCompany()
        token.initializeToken()
    }, [])

    const [stats, setStats] = useState({
        totalMessage: '0',
        questions: '0',
        chats: '0',
        server: 'Online'
    })

    const inter = useInteractions(token.token as string)

    useEffect(()=>{
        const status = async () => {
            if(inter.data){
                const now = new Date()
                const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000)

                let totQ = inter.data.map(e => e.question)
                let totR = inter.data.map(e => e.botAnswer)

                const activeChats = inter.data.filter(e => {
                    const createdAt = new Date(e.createAt)
                    return createdAt > fiveMinutesAgo
                }).length

                await setStats(e => ({
                    ...e,
                    totalMessage: String(totQ.length + totR.length),
                    questions: String(totR.length),
                    chats: String(activeChats)
                }))
            }
        }
        status()
    }, [inter.data])
    
    const setDataLong = (date: string | Date) => {
        const d = new Date(date)
        return d.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const setDataSmall = (date: string | Date) => {
        const d = new Date(date)
        return d.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return(
        <div className="flex-1 ml-[26%] bg-secondary">
            <div>
                <h1 className="text-lg mb-1 font-semibold">Deshboard</h1>
                <p className="text-[7px] text-cyan-700 mb-2">Resumo das atividades e informações principais</p>
            </div>
            <div>
                <p className="p-2 text-xs text-cyan-950 border-1 border-b-gray-900/50 rounded-md bg-white"> {`${process.env.NEXT_PUBLIC_SERVER_URL}/chat/new/${company.company?.id}`} </p>
            </div>
            <section className="p-2 flex flex-col gap-2 sm:flex-row justify-around">
                <ItemPage 
                    Icon={Mail}
                    title="Total de menssagens"
                    item={stats.totalMessage}
                />
                <ItemPage 
                    Icon={MessageSquare}
                    title="Perguntas respondidas"
                    item={stats.questions}
                />
                <ItemPage 
                    Icon={MessageCircle}
                    title="Chat ativos"
                    item={stats.chats}
                />
                <ItemPage
                    Icon={CheckCircle}
                    title="Chatbot"
                    item={stats.server}
                />
            </section>
            <section className="flex items-center flex-col sm:flex-row w-full mx-auto gap-2">

                <div className="w-full shadow-md border border-black/50 rounded-md">
                    <table className="w-full text-xs table-auto border-collapse">
                        <caption className="text-lg font-semibold mb-2 text-center">
                            Últimas Interações
                        </caption>
                        <thead>
                            <tr className="border-b border-black/50">
                                <th className="px-3 py-2 text-center">Data/Hora</th>
                                <th className="px-3 py-2 text-left">Pergunta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inter.data &&
                                [...inter.data].slice(0, 5).map((e, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-black/20 hover:bg-black/5 transition"
                                        >
                                            <td className="px-3 py-2 md:hidden text-center">
                                                {setDataSmall(e.createAt)}
                                            </td>

                                            <td className="px-3 py-2 hidden md:table-cell text-center">
                                                {setDataLong(e.createAt)}
                                            </td>

                                            <td className="px-3 py-2 max-w-xs">
                                                {e.question}
                                            </td>
                                        </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="border-1 min-w-60 shadow-md rounded-md border-cyan-950/50 h-60 sm:flex-1">
                    
                </div>
                
            </section>
        </div>
    )
}

export default Deshboard