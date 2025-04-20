import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParkingHero } from "@/components/parking-hero"
import { ParkingFeatures } from "@/components/parking-features"
import { ParkingStats } from "@/components/parking-stats"
import { ParkingCTA } from "@/components/parking-cta"
import { VehicleTypes } from "@/components/vehicle-types"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Sign Up</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <ParkingHero />
        <ParkingStats />
        <VehicleTypes />
        <ParkingFeatures />
        <ParkingCTA />
      </main>
      <footer className="border-t py-6 md:py-0 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for Bennett University. Smart Parking System &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
