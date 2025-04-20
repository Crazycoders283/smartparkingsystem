import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-muted-foreground mt-2">Last updated: April 20, 2025</p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>
                  Welcome to the Bennett University Smart Parking System. These Terms of Service govern your use of our
                  website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">2. Definitions</h2>
                <p>
                  <strong>"Service"</strong> refers to the Smart Parking System provided by Bennett University.
                </p>
                <p>
                  <strong>"User"</strong> refers to any individual who accesses or uses the Service, including students,
                  faculty, staff, and visitors.
                </p>
                <p>
                  <strong>"Booking"</strong> refers to the reservation of a parking slot through the Service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">3. User Accounts</h2>
                <p>3.1. Users must register for an account to access the full features of the Service.</p>
                <p>3.2. Users are responsible for maintaining the confidentiality of their account credentials.</p>
                <p>3.3. Users must provide accurate and complete information during registration.</p>
                <p>3.4. Users are responsible for all activities that occur under their account.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">4. Booking and Cancellation</h2>
                <p>4.1. Users may book parking slots subject to availability.</p>
                <p>4.2. Bookings can be made up to 30 days in advance.</p>
                <p>4.3. Users may cancel bookings up to 1 hour before the scheduled time without any charges.</p>
                <p>4.4. Late cancellations or no-shows may result in penalties as determined by the university.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">5. User Conduct</h2>
                <p>5.1. Users must comply with all applicable laws and regulations.</p>
                <p>5.2. Users must not engage in any activity that interferes with or disrupts the Service.</p>
                <p>5.3. Users must not attempt to gain unauthorized access to any part of the Service.</p>
                <p>5.4. Users must not use the Service for any illegal or unauthorized purpose.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
                <p>6.1. The Service is provided "as is" without warranties of any kind.</p>
                <p>
                  6.2. Bennett University is not responsible for any damages or losses resulting from the use of the
                  Service.
                </p>
                <p>
                  6.3. Bennett University is not liable for any indirect, incidental, special, consequential, or
                  punitive damages.
                </p>
                <p>
                  6.4. The total liability of Bennett University shall not exceed the amount paid by the user for the
                  Service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
                <p>
                  7.1. All content, features, and functionality of the Service are owned by Bennett University and are
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  7.2. Users may not reproduce, distribute, modify, create derivative works of, publicly display,
                  publicly perform, republish, download, store, or transmit any of the material on the Service without
                  prior written consent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">8. Termination</h2>
                <p>
                  8.1. Bennett University may terminate or suspend a user's access to the Service at any time, without
                  prior notice or liability, for any reason.
                </p>
                <p>8.2. Users may terminate their account at any time by contacting the administrator.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
                <p>9.1. Bennett University reserves the right to modify these Terms at any time.</p>
                <p>9.2. Users will be notified of any changes to the Terms.</p>
                <p>
                  9.3. Continued use of the Service after any modifications constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">10. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p>
                  Email: parking@bennett.edu.in
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
