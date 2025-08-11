import { Activity, LayoutDashboard, MessageSquare, Settings, TrendingUp } from "lucide-react"

type Props = {
    text:string
    item:number
    active: number
    setActive: (item:number) => void
}

export const MenuItem = ({text, item, active, setActive}:Props) => {

    const handleClick = () => {
        setActive(item)
    }

    return(
        <div 
        onClick={handleClick}
            className={`my-3 flex gap-2 text-cyan-950 hover:bg-blue-100 hover:opacity-70 active:opacity-70 hover:rounded-md font-semibold py-2 px-3 cursor-pointer
                ${active === item ? 'bg-blue-100 rounded-md' : ' '}    
            `}
        >
            {item === 0 &&
                <>
                    <LayoutDashboard/>
                    <p className="hidden sm:block">{text}</p>
                </>
            }
            {item === 1 &&
                <>
                    <MessageSquare/>
                    <p className="hidden sm:block">{text}</p>
                </>
            }
            {item === 2 &&
                <>
                    <TrendingUp/>
                    <p className="hidden sm:block">{text}</p>
                </>
            }
            {item === 3 &&
                <>
                    <Activity/>
                    <p className="hidden sm:block">{text}</p>
                </>
            }
            {item === 4 &&
                <>
                    <Settings/>
                    <p className="hidden sm:block">{text}</p>
                </>
            } 
        </div>
    )
}