import { DashboardLayout } from "@/components/layout/dashboard-layout";
import AnalyticsPage from "./page";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}