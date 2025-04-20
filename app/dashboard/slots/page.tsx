import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Car, Bike, Plus } from "lucide-react"

export default function SlotsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Parking Slots</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Slot
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Parking Slots</CardTitle>
          <CardDescription>Manage your parking slots across all zones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Slot ID</TableHead>
                  <TableHead>Zone</TableHead>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">A-01</TableCell>
                  <TableCell>Zone A - Main Building</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Car className="mr-2 h-4 w-4" /> Car
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Available
                    </Badge>
                  </TableCell>
                  <TableCell>2 mins ago</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">A-02</TableCell>
                  <TableCell>Zone A - Main Building</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Car className="mr-2 h-4 w-4" /> Car
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-red-100 text-red-800">
                      Occupied
                    </Badge>
                  </TableCell>
                  <TableCell>5 mins ago</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">B-01</TableCell>
                  <TableCell>Zone B - Academic Block</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Bike className="mr-2 h-4 w-4" /> Bike
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                      Reserved
                    </Badge>
                  </TableCell>
                  <TableCell>10 mins ago</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
