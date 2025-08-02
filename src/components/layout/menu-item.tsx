"use client"

import { useState } from "react"
import { Button } from "./button"
import Link from "next/link"

export const MenuItem = () => {
      const [active, setActive] = useState('Início')
      
      const menuItems = ['Início', 'Sobre', 'Funcionalidades', 'Entrar']
      const rotas = ['/', 'about', 'features', 'login']

    return(
        <ul className="flex sm:items-center sm:flex-row sm:text-sm md:gap-9 font-semibold flex-col h-full text-white text-xl gap-4">
            {menuItems.map((item, index) => (
            <li
                key={item}
                onClick={()=> setActive(item)}
                className={`cursor-pointer hover:opacity-80 active:opacity-80 ${
                    active === item ? 'underline' : ''
                }`}
            > <Link href={rotas[index]}> {item} </Link>
            </li>
            ))}
            <li> <Button type={"1"}/> </li>
        </ul>
    )
}