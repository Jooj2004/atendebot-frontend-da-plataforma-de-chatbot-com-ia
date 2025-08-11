"use client"
import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"
import { useInteractions } from "@/utils/queries"
import { useEffect } from "react"

const Deshboard = () => {
    const company = useCompanyStore()
    const token = useTokenStore()
    useEffect(() => {
        company.initializeCompany()
        token.initializeToken()
    }, [])

    const inter = useInteractions(token.token as string)

    return(
        <div className="flex-1">
            deashboard
        </div>
    )
}

export default Deshboard