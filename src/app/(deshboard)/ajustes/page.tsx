"use client"

import { FormCompany } from "@/components/ajustes/form-company"
import { useCompanyStore } from "@/store/company"

const Ajustes = () => {
    const {company} = useCompanyStore()

    return(
        <div className="flex-1 ml-[21%] bg-secondary px-1">
            <h1 className="text-lg mb-1 font-semibold">Ajustes</h1>
            <p className="text-[7px] md:text-[10px] text-cyan-700 mb-2">
                Aletera as informações da sua empresa
            </p>
            <div>
                <FormCompany
                    nameStore={company?.name as string}
                    descriptionStore={company?.description as string}
                    CNPJStore={company?.CNPJ as string}
                />
            </div>
        </div>
    )
}

export default Ajustes