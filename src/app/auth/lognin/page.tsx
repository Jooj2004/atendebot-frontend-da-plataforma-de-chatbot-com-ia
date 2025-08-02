"use client"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

const Lognin = () => {
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        alert('funciona')
    }

    return(
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="flex gap-1">Login <Image alt="logo" src={"/assets/logo.png"} width={20} height={20}/> </CardTitle>
                <CardDescription className="hidden sm:block">Se ainda não tem uma conta, cadastre-se.</CardDescription>
                <CardAction>
                    <Button variant={"link"}><Link href={'/auth/signin'}>Cadastre-se</Link></Button>
                </CardAction>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className="flex flex-col gap-2">
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
                                placeholder="Insira a sua senha:"
                                required
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="cursor-pointer my-4" type="submit">Entrar</Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Lognin