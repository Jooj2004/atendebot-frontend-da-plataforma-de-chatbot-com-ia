"use client"

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
                <Chart  date={inter.data as Inter[]}/>
            }
        </div>
    )
}

export default Analise