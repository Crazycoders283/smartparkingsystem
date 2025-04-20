"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4 text-center">
      <div className="mb-6">
        <AlertTriangle className="h-16 w-16 text-red-500 mx-auto" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">Something went wrong!</h1>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
