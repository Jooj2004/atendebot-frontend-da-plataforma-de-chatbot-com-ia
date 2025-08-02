import { Body } from "@/components/layout/body";
import { Header } from "@/components/layout/header";

export default function Page () {
  return(
    <div className="py-4 px-10 min-h-screen bg-gradient-to-br from-[#2825eb] via-[#1915eb] to-[#5403d6]">
      <Header />
      <Body />
    </div>
  )
}
