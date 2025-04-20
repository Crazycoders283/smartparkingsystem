import { NextResponse } from "next/server"

// Mock data for bookings
const bookings = [
  {
    id: "B001",
    userId: "U001",
    slotId: "A-12",
    startTime: "2025-04-20T09:00:00Z",
    endTime: "2025-04-20T17:00:00Z",
    status: "active",
  },
  {
    id: "B002",
    userId: "U002",
    slotId: "B-05",
    startTime: "2025-04-20T10:30:00Z",
    endTime: "2025-04-20T14:30:00Z",
    status: "active",
  },
  {
    id: "B003",
    userId: "U003",
    slotId: "C-08",
    startTime: "2025-04-21T08:00:00Z",
    endTime: "2025-04-21T16:00:00Z",
    status: "pending",
  },
  {
    id: "B004",
    userId: "U004",
    slotId: "A-03",
    startTime: "2025-04-21T11:00:00Z",
    endTime: "2025-04-21T15:00:00Z",
    status: "pending",
  },
  {
    id: "B005",
    userId: "U005",
    slotId: "B-11",
    startTime: "2025-04-23T09:30:00Z",
    endTime: "2025-04-23T18:30:00Z",
    status: "pending",
  },
]

export async function GET(request: Request) {
  // Get status from query params if provided
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")

  // Filter by status if provided
  const filteredBookings = status ? bookings.filter((booking) => booking.status === status) : bookings

  return NextResponse.json({
    bookings: filteredBookings,
    total: filteredBookings.length,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, slotId, startTime, endTime } = body

    if (!userId || !slotId || !startTime || !endTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, save to database
    // For now, just return a success response with a mock ID
    return NextResponse.json({
      success: true,
      bookingId: `B${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      message: "Booking request submitted successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { bookingId, status } = body

    if (!bookingId || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, update the database
    // For now, just return a success response
    return NextResponse.json({
      success: true,
      message: `Booking ${bookingId} status updated to ${status}`,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
