import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Download } from "lucide-react"

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>View and manage all system users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>RS</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">Rahul Sharma</div>
                    </div>
                  </TableCell>
                  <TableCell>rahul.s@bennett.edu.in</TableCell>
                  <TableCell>Student</TableCell>
                  <TableCell>Computer Science</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Actions
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>PP</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">Priya Patel</div>
                    </div>
                  </TableCell>
                  <TableCell>priya.p@bennett.edu.in</TableCell>
                  <TableCell>Student</TableCell>
                  <TableCell>Electronics</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Actions
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">Amit Kumar</div>
                    </div>
                  </TableCell>
                  <TableCell>amit.k@bennett.edu.in</TableCell>
                  <TableCell>Faculty</TableCell>
                  <TableCell>Computer Science</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Actions
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
