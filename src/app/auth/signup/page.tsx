"use client"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Signup = () => {
    
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        alert('funciona')
    }

    return(
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="flex gap-1">Cadastre-se<Image alt="logo" src={"/assets/logo.png"} width={20} height={20}/></CardTitle>
                <CardDescription className="hidden sm:block">Cadastre-se para começar a usar nossos serviços personalizados.</CardDescription>
                <CardAction>
                    <Button variant={"link"}><Link href={'/auth/lognin'}>Login</Link></Button>
                </CardAction>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Nome da empresa</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Digite o nome da empresa:"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Input
                                id="description"
                                type="text-area"
                                placeholder="Descreva sua empresa:"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="CNPJ">CNPJ</Label>
                            <Input
                                id="CNPJ"
                                type="text"
                                placeholder="Digite o CNPJ da empresa:"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Digite o email da empresa:"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Crie uma senha segura:"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="confPassword">Confirmar senha</Label>
                            <Input
                                id="confPassword"
                                type="password"
                                placeholder="Confirme a sua senha:"
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="cursor-pointer my-4" type="submit">Cadastrar</Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Signup