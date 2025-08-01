type Props = {
    type: string
}

export const Button = ({type}: Props) => {
    return(
        <button className={`cursor-pointer text-white rounded-lg py-1 px-2 outline-none hover:opacity-70 active:opacity-70
                            ${type === '1' 
                                ?'bg-pink-500 text-lg' 
                                : 'bg-blue-900 border border-blue-300'
                            }`
        }>
            {type === '1' &&
                'Cadastre-se'
            }
            {type === '2' &&
                'Saiba mais'
            }
        </button>
    )
}