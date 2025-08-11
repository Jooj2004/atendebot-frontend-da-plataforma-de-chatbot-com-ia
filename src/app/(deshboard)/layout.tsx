import { LeftPage } from "@/components/deshboard/left-page";
import "../globals.css"

export default function DeshboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <LeftPage />
      {children}
    </div>
  )
}
