import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PrivacyPage() {
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
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
              <p className="text-muted-foreground mt-2">Last updated: April 20, 2025</p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>
                  Bennett University ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our Smart Parking
                  System.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using the Smart Parking System, you
                  acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy
                  Policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, student/faculty ID, and
                    vehicle registration details.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use the Smart Parking System, including
                    parking preferences, booking history, and frequency of use.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Information about the device you use to access the Smart
                    Parking System, including IP address, browser type, and operating system.
                  </li>
                  <li>
                    <strong>Location Data:</strong> Information about your location when you use the Smart Parking
                    System, if you grant permission.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and maintaining the Smart Parking System</li>
                  <li>Processing and managing parking bookings</li>
                  <li>Sending notifications about bookings, cancellations, and updates</li>
                  <li>Improving the Smart Parking System and user experience</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Preventing fraudulent activities and enforcing our terms of service</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">4. Disclosure of Your Information</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as
                    payment processing, data analysis, and customer service.
                  </li>
                  <li>
                    <strong>University Departments:</strong> Relevant departments within Bennett University for
                    administrative purposes.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety,
                    or property.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission
                  over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">6. Data Retention</h2>
                <p>
                  We will retain your personal information for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">7. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us"
                  section.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>
                  Email: privacy@bennett.edu.in
                  <br />
                  Phone: +91 98765 43210
                  <br />
                  Address: Bennett University, Greater Noida, Uttar Pradesh, India
                </p>
              </section>
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
