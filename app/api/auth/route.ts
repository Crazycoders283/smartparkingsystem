import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action, email, password, code } = body

    // Handle login
    if (action === "login") {
      if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
      }

      // In a real app, validate credentials against database
      // For demo purposes, accept any @bennett.edu.in email with password length >= 8
      if (!email.endsWith("@bennett.edu.in") || password.length < 8) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
      }

      // Mock user data based on email domain
      const role = email.includes("admin") ? "admin" : email.includes("faculty") ? "faculty" : "student"

      return NextResponse.json({
        success: true,
        user: {
          id: `U${Math.floor(Math.random() * 1000)
            .toString()
            .padStart(3, "0")}`,
          name: email
            .split("@")[0]
            .replace(".", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          email,
          role,
        },
        token: "mock_jwt_token_" + Math.random().toString(36).substring(2),
      })
    }

    // Handle registration
    if (action === "register") {
      if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
      }

      // Validate email domain
      if (!email.endsWith("@bennett.edu.in")) {
        return NextResponse.json({ error: "Only Bennett University email addresses are allowed" }, { status: 400 })
      }

      // Validate password strength
      if (password.length < 8) {
        return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
      }

      return NextResponse.json({
        success: true,
        message: "Registration successful. Please check your email for verification.",
      })
    }

    // Handle verification
    if (action === "verify") {
      if (!email || !code) {
        return NextResponse.json({ error: "Email and verification code are required" }, { status: 400 })
      }

      // In a real app, validate the verification code
      // For demo purposes, accept any 6-digit code
      if (!/^\d{6}$/.test(code)) {
        return NextResponse.json({ error: "Invalid verification code" }, { status: 400 })
      }

      return NextResponse.json({
        success: true,
        message: "Email verified successfully. You can now log in.",
      })
    }

    // Handle password reset request
    if (action === "forgot_password") {
      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 })
      }

      return NextResponse.json({
        success: true,
        message: "Password reset link sent to your email.",
      })
    }

    // Handle password reset
    if (action === "reset_password") {
      if (!code || !password) {
        return NextResponse.json({ error: "Reset code and new password are required" }, { status: 400 })
      }

      // Validate password strength
      if (password.length < 8) {
        return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
      }

      return NextResponse.json({
        success: true,
        message: "Password reset successful. You can now log in with your new password.",
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
