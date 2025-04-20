import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserProfile } from "@/components/user-profile"
import { UserBookings } from "@/components/user-bookings"
import { UserVehicles } from "@/components/user-vehicles"
import { UserPreferences } from "@/components/user-preferences"
import { UserDashboard } from "@/components/user-dashboard"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/map">
              <Button variant="outline">Live Map</Button>
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
                User <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Manage your account, bookings, and preferences</p>
            </div>
            <div className="flex space-x-2">
              <Link href="/user/request-trip">
                <Button>Request New Trip</Button>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="dashboard" className="space-y-4">
              <TabsList>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard">
                <Card>
                  <CardHeader>
                    <CardTitle>User Dashboard</CardTitle>
                    <CardDescription>Overview of your parking activity and statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserDashboard />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>View and update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserProfile />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings">
                <Card>
                  <CardHeader>
                    <CardTitle>My Bookings</CardTitle>
                    <CardDescription>View your active and past parking bookings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserBookings />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vehicles">
                <Card>
                  <CardHeader>
                    <CardTitle>My Vehicles</CardTitle>
                    <CardDescription>Manage your registered vehicles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserVehicles />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Customize your parking experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserPreferences />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
