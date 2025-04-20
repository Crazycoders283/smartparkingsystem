import { NextResponse } from "next/server"

// Mock data for parking slots
const parkingSlots = [
  { id: "A-01", zone: "A", status: "available" },
  { id: "A-02", zone: "A", status: "occupied" },
  { id: "A-03", zone: "A", status: "available" },
  { id: "A-04", zone: "A", status: "available" },
  { id: "B-01", zone: "B", status: "occupied" },
  { id: "B-02", zone: "B", status: "available" },
  { id: "B-03", zone: "B", status: "occupied" },
  { id: "C-01", zone: "C", status: "available" },
  { id: "C-02", zone: "C", status: "available" },
  { id: "C-03", zone: "C", status: "occupied" },
]

export async function GET(request: Request) {
  // Get zone from query params if provided
  const { searchParams } = new URL(request.url)
  const zone = searchParams.get("zone")

  // Filter by zone if provided
  const filteredSlots = zone ? parkingSlots.filter((slot) => slot.zone === zone) : parkingSlots

  return NextResponse.json({
    slots: filteredSlots,
    total: filteredSlots.length,
    available: filteredSlots.filter((slot) => slot.status === "available").length,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slotId, status } = body

    if (!slotId || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, update the database
    // For now, just return a success response
    return NextResponse.json({
      success: true,
      message: `Slot ${slotId} status updated to ${status}`,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
