import { NextResponse } from "next/server"

// Mock data for users
const users = [
  {
    id: "U001",
    name: "Rahul Sharma",
    email: "rahul.s@bennett.edu.in",
    phone: "+91 98765 43210",
    role: "student",
    department: "Computer Science",
    joinedDate: "2023-09-01",
    status: "active",
  },
  {
    id: "U002",
    name: "Priya Patel",
    email: "priya.p@bennett.edu.in",
    phone: "+91 87654 32109",
    role: "student",
    department: "Electronics",
    joinedDate: "2023-09-01",
    status: "active",
  },
  {
    id: "U003",
    name: "Amit Kumar",
    email: "amit.k@bennett.edu.in",
    phone: "+91 76543 21098",
    role: "faculty",
    department: "Computer Science",
    joinedDate: "2022-07-15",
    status: "active",
  },
  {
    id: "U004",
    name: "Sneha Gupta",
    email: "sneha.g@bennett.edu.in",
    phone: "+91 65432 10987",
    role: "staff",
    department: "Administration",
    joinedDate: "2021-11-10",
    status: "active",
  },
  {
    id: "U005",
    name: "Vikram Singh",
    email: "vikram.s@bennett.edu.in",
    phone: "+91 54321 09876",
    role: "admin",
    department: "IT Department",
    joinedDate: "2020-06-20",
    status: "active",
  },
]

export async function GET(request: Request) {
  // Get query params
  const { searchParams } = new URL(request.url)
  const role = searchParams.get("role")
  const department = searchParams.get("department")
  const status = searchParams.get("status")
  const search = searchParams.get("search")?.toLowerCase()

  // Filter users based on query params
  let filteredUsers = [...users]

  if (role) {
    filteredUsers = filteredUsers.filter((user) => user.role === role)
  }

  if (department) {
    filteredUsers = filteredUsers.filter((user) => user.department === department)
  }

  if (status) {
    filteredUsers = filteredUsers.filter((user) => user.status === status)
  }

  if (search) {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.phone.includes(search) ||
        user.department.toLowerCase().includes(search),
    )
  }

  return NextResponse.json({
    users: filteredUsers,
    total: filteredUsers.length,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, role, department } = body

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if email already exists
    const existingUser = users.find((user) => user.email === email)
    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }

    // In a real app, save to database
    // For now, just return a success response with a mock ID
    return NextResponse.json({
      success: true,
      userId: `U${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      message: "User created successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { userId, name, email, phone, role, department, status } = body

    if (!userId) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 })
    }

    // In a real app, update the database
    // For now, just return a success response
    return NextResponse.json({
      success: true,
      message: `User ${userId} updated successfully`,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 })
    }

    // In a real app, delete from database
    // For now, just return a success response
    return NextResponse.json({
      success: true,
      message: `User ${userId} deleted successfully`,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
