import { ParkingMap } from "@/components/parking-map"
import { MapFilters } from "@/components/map-filters"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/user/profile">
              <Button variant="outline">My Account</Button>
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
                Live Parking <span className="gradient-text">Map</span>
              </h1>
              <p className="text-muted-foreground">
                Interactive map showing real-time parking availability across campus
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="px-3 py-1">
                <span className="live-indicator pl-4">LIVE UPDATES</span>
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Last updated: 2 mins ago
              </Badge>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
            <MapFilters />
            <ParkingMap />
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
