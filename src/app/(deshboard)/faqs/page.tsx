"use client"

import { Button } from "@/components/ui/button"
import { useTokenStore } from "@/store/token"
import { useFaqs } from "@/utils/queries"

const Faqs = () => {
    const token = useTokenStore()

    const faqs = useFaqs(token.token as string)

    const handleEdit = (companyId: string) => {

    }

    const handleExclud = (companyId: string) => {

    }

    return(
        <>
            {faqs.isLoading &&
                <>Carregando...</>
            }
            {!faqs.isLoading &&
                <div className="flex-1 ml-[24%] bg-secondary px-1">
                    <div>
                        <h1 className="text-lg mb-1 font-semibold">FAQs</h1>
                        <p className="text-[7px] md:text-[10px] text-cyan-700 mb-2">Cadastre as perguntas mais frequentes dos clientes. O chatbot usará essas informações para responder automaticamente. Dica: Priorize clareza e relevância!</p>
                    </div>
                    <div className="mx-auto bg-red-500 w-60 h-70 md:w-1/2">
                        Tabela para criar novas faqs
                    </div>
                    {faqs.data && faqs.data.length > 0 &&
                        <div>
                            <h2 className="font-semibold md:text-lg">Suas FAQs</h2>
                            {faqs.data.map((e,index) => (
                                <div key={index} className="border flex my-3 flex-col gap-2 mx-1 p-1 md:px-2 md:py-3 rounded-md shadow-md">
                                    <p className="text-sm md:text-md font-semibold text-blue-950">{e.question}</p>
                                    <p className="text-xs md:text-sm text-cyan-900">{e.answer}</p>
                                    <div>
                                        <Button 
                                            className="mr-2" 
                                            variant="destructive" 
                                            size="sm"
                                            onClick={() => handleEdit(e.companyId as string)}
                                        >Editar</Button>

                                        <Button 
                                            size="sm"
                                            onClick={() => handleExclud(e.companyId as string)}
                                        >Excluir</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    {faqs.data && faqs.data.length <= 0 &&
                        <></>
                    }
                </div>
            }
        </>
    )
}

export default Faqs