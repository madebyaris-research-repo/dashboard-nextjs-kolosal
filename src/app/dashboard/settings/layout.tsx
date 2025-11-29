import { DashboardLayout } from "@/components/layout/dashboard-layout";
import SettingsPage from "./page";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}