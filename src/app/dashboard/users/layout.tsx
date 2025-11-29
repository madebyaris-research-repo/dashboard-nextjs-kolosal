import { DashboardLayout } from "@/components/layout/dashboard-layout";
import UsersPage from "./page";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}