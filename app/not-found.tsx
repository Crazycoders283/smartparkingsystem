import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4 text-center">
      <div className="relative mb-4">
        <Car className="h-16 w-16 text-primary" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">404 - Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Oops! The parking spot you're looking for doesn't exist. It seems you've taken a wrong turn.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/map">View Parking Map</Link>
        </Button>
      </div>
    </div>
  )
}
