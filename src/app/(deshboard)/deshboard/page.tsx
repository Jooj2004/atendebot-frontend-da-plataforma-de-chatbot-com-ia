"use client"
import { ItemPage } from "@/components/deshboard/itens-page"
import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"
import { useEffect, useState } from "react"
import {Mail, MessageSquare, MessageCircle, CheckCircle} from "lucide-react"
import { useInteractions } from "@/utils/queries"

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
    

    return(
        <div className="flex-1 py-1 px-2 bg-secondary">
            <div>
                <h1 className="text-lg mb-1 font-semibold">Deshboard</h1>
                <p className="text-[7px] text-cyan-700 mb-2">Resumo das atividades e informações principais</p>
            </div>
            <div>
                <p className="p-2 text-xs text-cyan-950 border-1 border-b-gray-900/50 rounded-md bg-white"> {`${process.env.NEXT_PUBLIC_SERVER_URL}/chat/new/${company.company?.id}`} </p>
            </div>
            <section className="p-2 flex flex-col gap-2 sm:flex-row">
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
        </div>
    )
}

export default Deshboard