import { Button } from "./button"

export const Body = () => {
    return(
        <section className="w-[85%] flex- flex-col">
            <div className="mb-2">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-white font-semibold">Atendimento ao Cliente com IA</h1>
                    <p className="text-white text-sm mb-4">Plataforma de chatbot personalizável para automatizar o suporte ao cliente.</p>
                </div>
                <div className="flex gap-1">
                    <Button type={'1'}/>
                    <Button type={'2'}/>
                </div>
            </div>
            <div className="flex-1">
                
            </div>
        </section>
    )
}