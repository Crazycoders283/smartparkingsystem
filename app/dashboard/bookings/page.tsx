import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download } from "lucide-react"

export default function BookingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
          <CardDescription>View and manage all parking bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Slot</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">B001</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>RS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Rahul Sharma</div>
                        <div className="text-xs text-muted-foreground">rahul.s@bennett.edu.in</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>A-12 (Main Building)</TableCell>
                  <TableCell>
                    <div>Apr 20, 2025</div>
                    <div className="text-xs text-muted-foreground">09:00 - 17:00</div>
                  </TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">B002</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>PP</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Priya Patel</div>
                        <div className="text-xs text-muted-foreground">priya.p@bennett.edu.in</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>B-05 (Academic Block)</TableCell>
                  <TableCell>
                    <div>Apr 21, 2025</div>
                    <div className="text-xs text-muted-foreground">10:30 - 14:30</div>
                  </TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">B003</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Amit Kumar</div>
                        <div className="text-xs text-muted-foreground">amit.k@bennett.edu.in</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>C-08 (Hostel Area)</TableCell>
                  <TableCell>
                    <div>Apr 15, 2025</div>
                    <div className="text-xs text-muted-foreground">08:00 - 16:00</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Pending</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
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
