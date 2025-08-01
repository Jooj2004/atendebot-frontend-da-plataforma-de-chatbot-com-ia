import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "./button"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <header className="mb-10">
      <div className="flex items-center">
        <div className="flex flex-1 h-8 p-1 items-center">
          <Logo/>
        </div>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
                <div className="cursor-pointer hover:opacity-80 active:opacity-80">
                    <div className="w-5 bg-white h-1 m-1 rounded-md"></div>
                    <div className="w-5 bg-white h-1 m-1 rounded-md"></div>
                </div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#232381] rounded-md border-none p-5">
                <SheetTitle><div className="flex flex-1 h-8 p-1 items-center"><Logo/></div></SheetTitle>
                <nav className="h-full pb-28">
                    <ul className="flex font-semibold flex-col h-full text-white text-xl gap-4">
                        <li className="cursor-pointer hover:opacity-80 active:opacity-80">Início</li>
                        <li className="cursor-pointer hover:opacity-80 active:opacity-80">Sobre</li>
                        <li className="cursor-pointer hover:opacity-80 active:opacity-80">Funcionalidades</li>
                        <li className="cursor-pointer hover:opacity-80 active:opacity-80">Entrar</li>
                        <li> <Button type={"1"}/> </li>
                    </ul>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden sm:flex">
            <nav className="h-full pb-28">
                <ul className="flex font-semibold h-full text-white text-md gap-2">
                    <li className="cursor-pointer hover:opacity-80 active:opacity-80">Início</li>
                    <li className="cursor-pointer hover:opacity-80 active:opacity-80">Sobre</li>
                    <li className="cursor-pointer hover:opacity-80 active:opacity-80">Funcionalidades</li>
                    <li className="cursor-pointer hover:opacity-80 active:opacity-80">Entrar</li>
                    <li> <Button type={"1"}/> </li>
                </ul>
              </nav>
        </div>
      </div>
    </header>
  )
}