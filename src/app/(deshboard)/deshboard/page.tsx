"use client"
import { useCompanyStore } from "@/store/company"
import { useTokenStore } from "@/store/token"

const Deshboard = () => {
    const company = useCompanyStore()
    const token = useTokenStore()

    return(
        <div className="flex-1">
            ...
        </div>
    )
}

export default Deshboard