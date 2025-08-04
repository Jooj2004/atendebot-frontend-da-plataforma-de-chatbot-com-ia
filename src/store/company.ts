import { Company } from "@/types/company"
import { create } from "zustand"

type CompanyStore = {
  company: Company | null
  setCompany: (company: Company) => void
  clearCompany: () => void
}

export const useCompanyStore = create<CompanyStore>((set) => ({
  company: null,
  setCompany: (company) => set({ company }),
  clearCompany: () => set({ company: null }),
}))