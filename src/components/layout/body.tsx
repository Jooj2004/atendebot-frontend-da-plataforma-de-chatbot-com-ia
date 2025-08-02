import { Button } from "./button"

export const Body = () => {
    return(
        <section className="w-[80%] mx-auto flex flex-col sm:flex-row">
            <div className="mb-2 sm:flex-1">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl lg:text-5xl text-white font-semibold">Atendimento ao Cliente com IA</h1>
                    <p className="text-white lg:text-lg text-sm mb-4">Plataforma de chatbot personalizável para automatizar o suporte ao cliente.</p>
                </div>
                <div className="flex gap-5">
                    <Button type={'1'}/>
                    <Button type={'2'}/>
                </div>
            </div>
            <div className="flex w-full h-[190px] sm:h-[250px] lg:h-[280px] justify-end py-5">
                <div className="grid grid-rows-3 grid-cols-2">
                    <div className=" z-10 min-w-34 h-10 pl-3">
                        <div className="bg-blue-600 bounce lg:text-[15px] rounded-lg p-2 text-xs text-white shadow-md">
                           <p>Opa, Como posso ajudar você?</p>
                        </div>
                    </div>
                    <div className="min-w-32">
                        <div className="text-xs bounce text-white lg:text-[15px] rounded-lg p-2 bg-violet-900 shadow-md">
                            Quais são os planos disponíveis?
                        </div>
                    </div>
                    <div className="min-w-32 max-w-64 pl-4">
                        <div className="text-[10px] bounce text-white rounded-lg p-2 bg-blue-950 shadow-md">
                            Experimente um chatbot poderoso
                        </div>
                    </div>
                    <div className="col-start-2 h-full w-24 lg:w-[130px] sm:w-32 p-2 ml-1 row-start-1 row-end-4">
                        <img className="bounce h-full w-full" src="assets/robo.png" alt="robo-chatbot" />
                    </div>
                </div>
            </div>
        </section>
    )
}