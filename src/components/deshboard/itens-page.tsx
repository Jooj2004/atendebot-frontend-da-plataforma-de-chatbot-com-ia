import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

type Props = {
    Icon:ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
    title: string
    item: string
}

export const ItemPage = ({Icon, title, item}: Props) => {
    return(
        <div className="text-cyan-950 border-1 p-2 border-b-gray-900/50 rounded-md bg-white">
            <div className="flex gap-2">
                <Icon />
                <p className="text-sm">{title}</p>
            </div>
            <div className="flex text-md">
                {item}
            </div>
        </div>
    )
}