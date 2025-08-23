"use client"

import { Frequente } from "@/components/analises/frequente"
import { Palavras } from "@/components/analises/palavras"
import { Taxa } from "@/components/analises/taxa"
import { Chart } from "@/components/deshboard/chart"
import { useTokenStore } from "@/store/token"
import { Inter } from "@/types/inter"
import { useInteractions } from "@/utils/queries"

const Analise = () => {
    const token = useTokenStore()

    const inter = useInteractions(token.token as string)

    return(
        <div className="flex-1 ml-[24%] bg-secondary">
            {inter.data &&
                <Chart date={inter.data as Inter[]}/>
            }
            <div className="flex flex-col sm:flex-row gap-2 p-2">
                <Frequente date={inter.data as Inter[]} />
                <Taxa />
            </div>
            <Palavras />
        </div>
    )
}

export default Analise