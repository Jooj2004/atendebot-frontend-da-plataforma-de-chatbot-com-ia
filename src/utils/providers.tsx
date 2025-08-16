"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Providers = ({children}: Props) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 10 * 60 * 1000,
                refetchOnWindowFocus: false,
                retry: 1
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    ) 
}