export type Login = {
    email: string
    password: string
}

export type LoginResponse = {
    token: string
    company: {
        id: string
        name: string
        description: string
        email: string
        CNPJ: string
        password: string
        verification: boolean
        createAt: string
        updateAt: string
        faqs: [
            id: string,
            question: string,
            answer: string,
            companyId: string,
            createAt: string,
            updateA: string
			
        ]
        inter: [
				id: string,
                question: string,
                botAnswer: string,
                companyId: string,
                createAt: string,
        ]
    }
}

export type signup = {
	name: string
	email: string
    CNPJ: string
	description: string
	password: string
}