import { Skeleton } from "../ui/skeleton";

export const EmailVerifySkeleton = () => {
  return (
    <div className="py-3 text-white px-8 min-h-screen bg-gradient-to-br from-[#2825eb] via-[#1915eb] to-[#5403d6] flex flex-col">
      <header className="flex items-center justify-between h-7 mb-10">
        <Skeleton className="h-6 w-24 bg-white/20 rounded" />
        <Skeleton className="h-6 w-10 bg-white/20 rounded" />
      </header>

      <div className="max-w-lg mx-auto md:border md:border-white/40 md:rounded-md md:shadow-2xl md:p-5 w-full">
        <Skeleton className="h-8 w-64 mb-4 bg-white/20 rounded" />
        <Skeleton className="h-4 w-80 mb-6 bg-white/20 rounded" />

        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-10 bg-white/20 rounded-md" />
          ))}
        </div>

        <Skeleton className="h-10 w-full mb-4 bg-pink-400/30 rounded" />
        <Skeleton className="h-4 w-40 mx-auto bg-white/20 rounded" />
      </div>
    </div>
  )
}