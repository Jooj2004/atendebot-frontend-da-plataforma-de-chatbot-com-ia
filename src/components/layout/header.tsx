import { TwoLines } from "./two-lines-button"

export const Header = () => {
    return(
        <header className="h-10 p-2">
            <div className="flex items-center">
                <div className="flex flex-1 h-8 p-1">
                    <img src="assets/logo.png" alt="AtendeBot" className="h-full bg-white rounded-md" />
                    <p className="text-white font-bold ml-1.5">AtendeBot</p>
                </div>
                <div>
                    MENU
                    <TwoLines/>
                </div>
            </div>
        </header>
    )
}