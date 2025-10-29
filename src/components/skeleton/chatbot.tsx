import { Skeleton } from "../ui/skeleton"

export const ChatbotSkeleton = () => {
  return (
    <div className="bg-secondary h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center h-[90%] bg-white py-3 mx-auto md:border shadow-md border-cyan-950/10 rounded-md px-4 max-w-xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <Skeleton className="h-8 w-32 bg-neutral-200" />
          <Skeleton className="h-14 w-14 rounded-full bg-neutral-200" />
        </div>

        <Skeleton className="h-6 w-64 bg-neutral-200 mb-6" />

        <div className="flex flex-col gap-3 w-full mb-6">
          <Skeleton className="h-10 w-[90%] self-center bg-neutral-200 rounded-md" />
          <Skeleton className="h-10 w-[70%] self-center bg-neutral-200 rounded-md" />
          <Skeleton className="h-10 w-[80%] self-center bg-neutral-200 rounded-md" />
        </div>

        <div className="flex flex-col gap-3 w-full mt-auto">
          <Skeleton className="h-10 w-full bg-neutral-200 rounded" />
          <Skeleton className="h-10 w-24 mx-auto bg-blue-400/30 rounded" />
        </div>
      </div>
    </div>
  )
}