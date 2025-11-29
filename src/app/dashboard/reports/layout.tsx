import { DashboardLayout } from "@/components/layout/dashboard-layout";
import ReportsPage from "./page";

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}