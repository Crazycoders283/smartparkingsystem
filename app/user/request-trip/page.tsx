import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TripRequestForm } from "@/components/trip-request-form"
import Link from "next/link"

export default function RequestTripPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/user/profile">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/user/trips">
              <Button variant="outline">My Trips</Button>
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
                Request <span className="gradient-text">New Trip</span>
              </h1>
              <p className="text-muted-foreground">Book a parking slot for your next visit</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
            <Card>
              <CardHeader>
                <CardTitle>Trip Request Form</CardTitle>
                <CardDescription>Fill in the details to request a parking slot</CardDescription>
              </CardHeader>
              <CardContent>
                <TripRequestForm />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Book at least 2 hours in advance for guaranteed slots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Peak hours are 9-11 AM and 4-6 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Zone A is closest to the main building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Cancellations are free up to 1 hour before booking time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Zone A</span>
                      <span className="font-medium text-green-600">5 slots</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Zone B</span>
                      <span className="font-medium text-green-600">8 slots</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Zone C</span>
                      <span className="font-medium text-green-600">3 slots</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">Last updated: 2 minutes ago</div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/map">View Live Map</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
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
