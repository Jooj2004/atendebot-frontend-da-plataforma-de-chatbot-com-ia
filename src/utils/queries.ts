import { getFaq, getFaqs, getInteractions } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useFaqs = (token:string) => {
    return useQuery({
        queryKey: ['faqs'],
        queryFn: () => getFaqs(token)
    })
}

export const useFaq = (token:string, id:string) => {
    return useQuery({
        queryKey: ['faqs'],
        queryFn: () => getFaq(token, id)
    })
}

export const useInteractions = (token:string) => {
    return useQuery({
        queryKey: ['inters'],
        queryFn: () => getInteractions(token)
    })
}