import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { AccessibilityStatus, AccessibilityHelper } from "@/components/accessibility";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your dashboard settings and accessibility preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AccessibilityStatus />
        <AccessibilityHelper />
      </div>

      {/* Additional settings sections can be added here */}
      <div className="space-y-6">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">General Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Language</p>
                <p className="text-xs text-muted-foreground">Select your preferred language</p>
              </div>
              <select className="h-10 w-32 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Timezone</p>
                <p className="text-xs text-muted-foreground">Set your local timezone</p>
              </div>
              <select className="h-10 w-32 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive updates via email</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                <span className="inline-block h-4 w-4 transform rounded-full bg-background transition translate-x-6"></span>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Push Notifications</p>
                <p className="text-xs text-muted-foreground">Receive browser push notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted">
                <span className="inline-block h-4 w-4 transform rounded-full bg-background transition translate-x-1"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}