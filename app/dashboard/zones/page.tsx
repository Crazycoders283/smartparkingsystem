import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function ZonesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Parking Zones</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Zone
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Zone A - Main Building</CardTitle>
            <CardDescription>8 total parking slots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Availability</span>
                <span className="font-medium">3/8 slots</span>
              </div>
              <Progress value={(3 / 8) * 100} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm mt-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Available</span>
                <span className="font-medium text-green-600 dark:text-green-400">3 slots</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Occupied</span>
                <span className="font-medium text-red-600 dark:text-red-400">5 slots</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Zone B - Academic Block</CardTitle>
            <CardDescription>6 total parking slots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Availability</span>
                <span className="font-medium">4/6 slots</span>
              </div>
              <Progress value={(4 / 6) * 100} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm mt-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Available</span>
                <span className="font-medium text-green-600 dark:text-green-400">4 slots</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Occupied</span>
                <span className="font-medium text-red-600 dark:text-red-400">2 slots</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Zone C - Hostel Area</CardTitle>
            <CardDescription>6 total parking slots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Availability</span>
                <span className="font-medium">5/6 slots</span>
              </div>
              <Progress value={(5 / 6) * 100} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm mt-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Available</span>
                <span className="font-medium text-green-600 dark:text-green-400">5 slots</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Occupied</span>
                <span className="font-medium text-red-600 dark:text-red-400">1 slots</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
