import { req } from "@/utils/axios"

export const serverON = async () => {
    try{
        const server = await req.get('/ping')
        if(server.data.pong) return true
    }catch{
        return false
    }
}

export const sendEmail = async (companyId: string) => {
    try{
        const res = await req.post('/auth/verification',{
            companyId
        })
        if(res.data.idOTP){
            return res.data.idOTP as string
        }
    }catch{
        return null
    }
}