import { Body } from "@/components/layout/body";
import { Header } from "@/components/layout/header";

export default function Page () {
  return(
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243e]">
      <Header />
      <Body />
    </div>
  )
}
