"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Loader2, ArrowLeft, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function VerificationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const router = useRouter()

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false)
      setIsVerified(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <div className="relative">
              <Car className="h-10 w-10 text-primary" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
          <CardDescription>
            {isVerified
              ? "Your account has been verified successfully!"
              : "We've sent a verification code to your email"}
          </CardDescription>
        </CardHeader>
        {isVerified ? (
          <CardContent className="space-y-4 text-center">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <p>Your account has been verified successfully!</p>
            <p className="text-sm text-muted-foreground">You will be redirected to the dashboard in a moment...</p>
          </CardContent>
        ) : (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-center">
                <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to your email address</p>
                <div className="flex justify-center gap-2">
                  {code.map((digit, index) => (
                    <Input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      className="h-12 w-12 text-center text-lg"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      required
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Didn't receive a code?{" "}
                  <Button variant="link" className="p-0 h-auto">
                    Resend
                  </Button>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading || code.some((digit) => !digit)}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying
                  </>
                ) : (
                  "Verify Account"
                )}
              </Button>
            </CardFooter>
          </form>
        )}
        <div className="px-6 pb-6 text-center">
          <Link href="/auth/login" className="inline-flex items-center text-sm text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to login
          </Link>
        </div>
      </Card>
    </div>
  )
}
