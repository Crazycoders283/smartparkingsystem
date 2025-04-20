import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your system's general configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="system-name">System Name</Label>
                <Input id="system-name" defaultValue="Bennett University Smart Parking System" />
                <p className="text-sm text-muted-foreground">This name will be displayed throughout the application</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="parking@bennett.edu.in" />
                <p className="text-sm text-muted-foreground">Email for system notifications and user support</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-phone">Support Phone Number</Label>
                <Input id="support-phone" defaultValue="+91 98765 43210" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Temporarily disable bookings for system maintenance</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                Appearance Settings Content
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="booking-confirmation">Booking Confirmations</Label>
                    <p className="text-sm text-muted-foreground">Send email when a booking is confirmed</p>
                  </div>
                  <Switch id="booking-confirmation" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="booking-reminder">Booking Reminders</Label>
                    <p className="text-sm text-muted-foreground">Send reminder emails before scheduled bookings</p>
                  </div>
                  <Switch id="booking-reminder" defaultChecked />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for your system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" />
                <p className="text-sm text-muted-foreground">
                  Time before an inactive user is automatically logged out
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for administrator accounts</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
