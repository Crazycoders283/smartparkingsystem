import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Slots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20</div>
                <p className="text-xs text-muted-foreground">+2 added this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available Slots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">60% availability</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Awaiting approval</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Parking Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  Parking Overview Chart
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Latest parking requests and approvals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Rahul Sharma booked A-12</p>
                      <p className="text-xs text-muted-foreground">20 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Priya Patel requested B-05</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Amit Kumar booked C-08</p>
                      <p className="text-xs text-muted-foreground">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View detailed analytics of your parking system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">Analytics Content</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">Reports Content</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
