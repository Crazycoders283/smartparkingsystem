import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserTrips } from "@/components/user-trips"
import Link from "next/link"

export default function TripsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/user/profile">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/map">
              <Button variant="outline">Live Map</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                My <span className="gradient-text">Trips</span>
              </h1>
              <p className="text-muted-foreground">View and manage your parking trips history</p>
            </div>
            <div className="flex space-x-2">
              <Link href="/user/request-trip">
                <Button>Request New Trip</Button>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Parking Trip History</CardTitle>
                <CardDescription>View all your past, current, and upcoming parking trips</CardDescription>
              </CardHeader>
              <CardContent>
                <UserTrips />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for Bennett University. Smart Parking System &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
