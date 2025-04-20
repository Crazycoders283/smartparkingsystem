"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/user/profile">
              <Button variant="outline">My Account</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions about the Smart Parking System? We're here to help. Fill out the form below or use our
                contact information to get in touch with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                        <h3 className="text-xl font-medium mb-2">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground max-w-md">
                          Thank you for contacting us. We have received your message and will respond to you shortly.
                        </p>
                        <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone number (optional)</Label>
                          <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="booking">Booking Issue</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Please describe your inquiry in detail..."
                            rows={5}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">parking@bennett.edu.in</p>
                        <p className="text-sm text-muted-foreground">support@bennett.edu.in</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                        <p className="text-sm text-muted-foreground">+91 12345 67890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Bennett University
                          <br />
                          Plot No 8-11, TechZone II
                          <br />
                          Greater Noida, Uttar Pradesh 201310
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Need immediate assistance? Contact our support team through WhatsApp for faster response.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                      </svg>
                      WhatsApp Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                  <CardDescription>
                    Bennett University is located in Greater Noida, Uttar Pradesh, India.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full rounded-md bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for Bennett University. Smart Parking System &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
