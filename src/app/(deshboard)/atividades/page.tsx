"use client"

import { useState } from "react"
import { useTokenStore } from "@/store/token"
import { Inter } from "@/types/inter"
import { useInteractions } from "@/utils/queries"

const Atividades = () => {
    const token = useTokenStore()
    const inter = useInteractions(token.token as string)
    const [filtro, setFiltro] = useState("7")

    const hasData = inter.data && (inter.data as Inter[]).length > 0

    const filtrar = (data: Inter[]) => {
        if (filtro === "all") return data
        const dias = parseInt(filtro)
        const limite = new Date()
        limite.setDate(limite.getDate() - dias)
        return data.filter(item => new Date(item.createAt) >= limite)
    }

    function formatarData(dataString: string) {
        const data = new Date(dataString)
        const dia = String(data.getDate()).padStart(2, "0")
        const mes = String(data.getMonth() + 1).padStart(2, "0")
        const ano = data.getFullYear()
        const horas = String(data.getHours()).padStart(2, "0")
        const minutos = String(data.getMinutes()).padStart(2, "0")
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`
    }

    const filtradas = hasData ? filtrar(inter.data as Inter[]) : []

    return (
        <>
        {inter.isLoading && <div>Carregando....</div>}

        {!inter.isLoading && !hasData && (
            <div className="flex flex-col items-center justify-center mt-10 p-4 bg-white border border-cyan-200 rounded-md shadow-md">
            <p className="text-cyan-700 font-semibold mb-2">Nenhum dado disponível.</p>
            <p className="text-gray-500 text-sm">Não foram encontradas interações para exibir.</p>
            </div>
        )}

        {!inter.isLoading && hasData && (
            <div className="flex-1 ml-[21%] bg-secondary px-1">
            <div>
                <h1 className="text-lg mb-1 font-semibold">Atividades</h1>
                <p className="text-[7px] md:text-[10px] text-cyan-700 mb-2">
                Histórico detalhado das interações do chatbot. Veja perguntas, respostas e filtre por período para acompanhar o uso.
                </p>
            </div>
            <div className="mb-2">
                <select
                    name="filtro"
                    aria-label="Filtro de período"
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                    className="border rounded p-1 text-sm"
                >
                    <option value="7">Últimos 7 dias</option>
                    <option value="30">Últimos 30 dias</option>
                    <option value="all">Tudo</option>
                </select>
            </div>
            <div className="">
                <ul className="text-sm">
                    <li className="hidden font-bold md:flex">
                        <h3>Data/Hora</h3>
                        <h3>Pergunta</h3>
                        <h3>Resposta</h3>
                    </li>
                {filtradas.map(item => (
                    <li key={item.id} className="border-b py-1 md:flex">
                        <div className="bg-red-500 w-[80px]">
                            <h3 className="font-bold md:hidden">
                                Data/Hora
                            </h3>
                            {formatarData(item.createAt)}
                        </div>
                        <div className="truncate w-[200px]">
                            <h3 className="font-bold md:hidden">
                                Pergunta
                            </h3>
                            {item.question}
                        </div>
                        <div className="truncate w-[200px]">
                            <h3 className="font-bold md:hidden">
                                Resposta
                            </h3>{item.botAnswer}
                        </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        )}
        </>
    )
}

export default Atividades