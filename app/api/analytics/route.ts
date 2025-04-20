import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Get query params
  const { searchParams } = new URL(request.url)
  const period = searchParams.get("period") || "week"
  const zone = searchParams.get("zone")

  // Generate mock analytics data based on period and zone
  const data = generateAnalyticsData(period, zone)

  return NextResponse.json(data)
}

function generateAnalyticsData(period: string, zone: string | null) {
  // Mock data for parking usage
  const usageData = {
    week: [
      { name: "Mon", available: 14, occupied: 6 },
      { name: "Tue", available: 12, occupied: 8 },
      { name: "Wed", available: 10, occupied: 10 },
      { name: "Thu", available: 8, occupied: 12 },
      { name: "Fri", available: 6, occupied: 14 },
      { name: "Sat", available: 16, occupied: 4 },
      { name: "Sun", available: 18, occupied: 2 },
    ],
    month: Array.from({ length: 30 }, (_, i) => {
      const day = i + 1
      const available = Math.floor(Math.random() * 10) + 5
      const occupied = 20 - available
      return { name: `Day ${day}`, available, occupied }
    }),
    year: Array.from({ length: 12 }, (_, i) => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      const available = Math.floor(Math.random() * 10) + 5
      const occupied = 20 - available
      return { name: months[i], available, occupied }
    }),
  }

  // Mock data for zone distribution
  const zoneData = [
    { name: "Zone A", value: 8 },
    { name: "Zone B", value: 5 },
    { name: "Zone C", value: 2 },
  ]

  // Mock data for peak hours
  const peakHoursData = Array.from({ length: 24 }, (_, i) => {
    const hour = i
    const usage =
      hour >= 8 && hour <= 18
        ? Math.floor(Math.random() * 50) + 50 // Higher usage during working hours
        : Math.floor(Math.random() * 30) // Lower usage outside working hours
    return { hour: `${hour}:00`, usage }
  })

  // Mock data for user types
  const userTypesData = [
    { name: "Students", value: 65 },
    { name: "Faculty", value: 20 },
    { name: "Staff", value: 10 },
    { name: "Visitors", value: 5 },
  ]

  // Filter data by zone if specified
  let filteredUsageData = usageData[period as keyof typeof usageData] || usageData.week

  if (zone) {
    // In a real app, we would filter the data based on the zone
    // For mock data, we'll just adjust the values slightly
    filteredUsageData = filteredUsageData.map((item) => ({
      ...item,
      available: Math.max(1, item.available - 2),
      occupied: Math.min(19, item.occupied + 2),
    }))
  }

  // Summary statistics
  const totalSlots = 20
  const currentlyAvailable = 12
  const currentlyOccupied = 8
  const averageOccupancyRate = 60 // percentage
  const peakOccupancyTime = "10:00 AM - 2:00 PM"
  const averageParkingDuration = 3.5 // hours

  return {
    summary: {
      totalSlots,
      currentlyAvailable,
      currentlyOccupied,
      averageOccupancyRate,
      peakOccupancyTime,
      averageParkingDuration,
    },
    usageData: filteredUsageData,
    zoneData,
    peakHoursData,
    userTypesData,
  }
}
