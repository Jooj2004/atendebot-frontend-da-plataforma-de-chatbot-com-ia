"use client"
import { ItemPage } from "@/components/deshboard/itens-page"
import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"
import { useEffect, useState } from "react"
import { Mail, MessageSquare, MessageCircle, CheckCircle } from "lucide-react"
import { useInteractions } from "@/utils/queries"
import { Table } from "@/components/deshboard/table"
import { Inter } from "@/types/inter"
import { Chart } from "@/components/deshboard/chart"
import { serverON } from "@/services/auth"
import { useRouter } from "next/navigation"
import DashboardSkeleton from "@/components/skeleton/deshboard"
import { Button } from "@/components/ui/button"

const Deshboard = () => {
    const router = useRouter()
    const company = useCompanyStore()
    const token = useTokenStore()

    useEffect(() => {
        const verify = async () => {
            const server = await serverON()
            if (!server) router.push('/')
            company.initializeCompany()
            token.initializeToken()
        }
        verify()
    }, [])

    const [stats, setStats] = useState({
        totalMessage: '0',
        questions: '0',
        chats: '0',
        server: 'Online'
    })

    const inter = useInteractions(token.token as string)

    useEffect(() => {
        const status = async () => {
            if (inter.data) {
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

    const link = `${process.env.NEXT_PUBLIC_MY_URL}/chatbot?id=${company.company?.id}`
    const [cop, setCop] = useState(false)
    const copiar = async () => {
        try {
            await navigator.clipboard.writeText(link)
            setCop(true)
            setTimeout(() => setCop(false), 10000)
        } catch (err) {
            alert("Erro ao copiar: " + err)
        }
    }

    return (
        <>
            {inter.isLoading &&
                <DashboardSkeleton />
            }

            {!inter.isLoading &&
                <div className="flex-1 ml-[21%] bg-secondary px-1">
                    <div>
                        <h1 className="text-lg mb-1 font-semibold">Deshboard</h1>
                        <p className="text-[7px] md:text-[10px] text-cyan-700 mb-2">
                            Resumo das atividades e informações principais
                        </p>
                    </div>

                    <div>
                        <p className="p-2 text-xs text-cyan-950 border-1 border-b-gray-900/50 rounded-md bg-white">
                            {link}
                        </p>

                        <Button
                            variant={"outline"}
                            size={"sm"}
                            onClick={() => router.push(`/chatbot?id=${company.company?.id}`)}
                        >
                            Ir
                        </Button>

                        <Button
                            variant={cop ? "secondary" : "outline"}
                            size={"sm"}
                            onClick={copiar}
                        >
                            {cop ? 'Copiado!' : 'Copiar'}
                        </Button>

                        <p className="p-2 text-[8px] md:text-[10px] text-cyan-950">
                            Olá! 😊 <br />
                            O link acima é o endpoint do nosso chatbot. Para utilizá-lo, você deve enviar uma requisição HTTP com a sua pergunta no corpo (body).
                            O chatbot irá processar e devolver a resposta. É uma forma prática de integrar à sua aplicação 🚀
                        </p>

                        {/* 🔽 WIDGET EMBED — NOVO TRECHO */}
                        <div className="mt-4 p-3 bg-white border border-cyan-950/30 rounded-md text-xs">

                            <h2 className="text-sm font-semibold mb-2 text-cyan-900">
                                Widget para incorporar no seu site:
                            </h2>

                            <p className="mb-2 text-[10px]">
                                Copie o código abaixo e cole no <b>HTML do seu site</b> para exibir o chatbot automaticamente:
                            </p>

                            <pre className="p-2 bg-gray-100 rounded-md overflow-auto text-[8px] md:text-[10px] border border-gray-300">
{`<iframe 
  src="${link}" 
  width="100%" 
  height="600px" 
  style="border: none; border-radius: 8px;"
></iframe>`}
                            </pre>

                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-2"
                                onClick={() => {
                                    navigator.clipboard.writeText(
`<iframe 
  src="${link}" 
  width="100%" 
  height="600px" 
  style="border: none; border-radius: 8px;"
></iframe>`
                                    )
                                    alert("Código copiado!")
                                }}
                            >
                                Copiar código do widget
                            </Button>

                            <div className="mt-4 border border-gray-300 rounded-md overflow-hidden bg-white">
                                <iframe
                                    src={link}
                                    style={{ width: "100%", height: "300px", border: "none" }}
                                />
                            </div>
                        </div>
                        {/* 🔼 FIM DO WIDGET */}

                    </div>

                    <section className="p-2 flex flex-col gap-2 sm:flex-row justify-around">
                        <ItemPage Icon={Mail} title="Total de menssagens" item={stats.totalMessage} />
                        <ItemPage Icon={MessageSquare} title="Perguntas respondidas" item={stats.questions} />
                        <ItemPage Icon={MessageCircle} title="Chat ativos" item={stats.chats} />
                        <ItemPage Icon={CheckCircle} title="Chatbot" item={stats.server} />
                    </section>

                    {inter.data && inter.data.length > 0 &&
                        <section className="flex items-center flex-col sm:flex-row w-full mx-auto gap-2">
                            <div className="w-full shadow-md border border-cyan-950/50 rounded-md">
                                <Table date={inter.data as Inter[]} />
                            </div>

                            <div className="border-1 w-60 shadow-md rounded-md border-cyan-950/50 h-60 sm:flex-1">
                                <Chart date={inter.data as Inter[]} />
                            </div>
                        </section>
                    }

                    {inter.data && inter.data.length <= 0 &&
                        <section className="flex flex-col items-center justify-center p-10 px-5 text-center bg-gray-100 rounded-xl max-w-xl mx-auto my-5">
                            <h2 className="text-2xl text-gray-800 mb-4">Bem-vindo!</h2>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Parece que é seu primeiro acesso ou você ainda não criou suas FAQs.
                                Crie suas perguntas frequentes para ajudar seus usuários!
                            </p>
                        </section>
                    }
                </div>
            }
        </>
    )
}

export default Deshboard