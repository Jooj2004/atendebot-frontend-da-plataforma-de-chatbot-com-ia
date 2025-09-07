import { useState } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

export const FormCompany = (
    {nameStore, descriptionStore, CNPJStore}:
    {nameStore:string, descriptionStore:string, CNPJStore:string}
) => {
    const [name, setName] = useState(nameStore)
    const [description, setDescriptio] = useState(descriptionStore)
    const [CNPJ, setCNPJ] = useState(CNPJStore)


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        alert('OK')
    }

    return(
        <div>
            <form 
                onSubmit={handleSubmit}
                className="border px-1 py-2 md:px-2 md:py-3 rounded-md max-w-2xl mx-auto border-cyan-950/20 flex flex-col gap-3"
            >
                <div>
                    <h2 className="font-semibold">Informações da Empresa</h2>
                </div>
                <div>
                    <Label className="my-1" htmlFor="name">Nome da empresa</Label>
                    <Input
                        className="text-xs"
                        id="name"
                        type="text"
                        placeholder="Digite o nome da empresa:"
                        required
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <Label className="my-1" htmlFor="description">Descrição</Label>
                    <Input
                        className="text-xs"
                        id="description"
                        type="text"
                        placeholder="Digite a descrição da empresa:"
                        required
                        onChange={(e)=>setDescriptio(e.target.value)}
                        value={description}
                    />
                </div>
                <div>
                    <Label className="my-1" htmlFor="CNPJ">CNPJ</Label>
                    <Input
                        className="text-xs"
                        id="CNPJ"
                        type="text"
                        placeholder="Digite o CNPJ da empresa:"
                        required
                        onChange={(e)=>setCNPJ(e.target.value)}
                        value={CNPJ}
                    />
                </div>
                <div className="self-end">
                    <Button 
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 transition-colors"
                    >Salvar alterações</Button>
                </div>
            </form>
        </div>
    )
}