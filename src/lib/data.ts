// Mock data functions for demonstration
// In a real app, these would fetch from your API

export interface DashboardStats {
  totalRevenue: number;
  activeUsers: number;
  sales: number;
  performance: number;
  revenueChange: number;
  userChange: number;
  salesChange: number;
  performanceChange: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: "success" | "info" | "warning";
}

export interface ChartData {
  name: string;
  value: number;
  date: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay(800); // Simulate network delay
  
  return {
    totalRevenue: 45231,
    activeUsers: 2350,
    sales: 12234,
    performance: 98.5,
    revenueChange: 20.1,
    userChange: 180.1,
    salesChange: -19,
    performanceChange: 1.2,
  };
}

export async function getRecentActivity(): Promise<ActivityItem[]> {
  await delay(600);
  
  return [
    {
      id: "1",
      title: "New user registration",
      description: "John Doe joined the platform",
      timestamp: "2 minutes ago",
      status: "success",
    },
    {
      id: "2",
      title: "Payment received",
      description: "$250.00 from customer #1234",
      timestamp: "15 minutes ago",
      status: "info",
    },
    {
      id: "3",
      title: "System update completed",
      description: "Version 2.1.0 deployed successfully",
      timestamp: "1 hour ago",
      status: "success",
    },
    {
      id: "4",
      title: "Server maintenance",
      description: "Scheduled maintenance in 2 hours",
      timestamp: "2 hours ago",
      status: "warning",
    },
  ];
}

export async function getRevenueData(): Promise<ChartData[]> {
  await delay(500);
  
  return [
    { name: "Jan", value: 4000, date: "2024-01" },
    { name: "Feb", value: 3000, date: "2024-02" },
    { name: "Mar", value: 5000, date: "2024-03" },
    { name: "Apr", value: 4500, date: "2024-04" },
    { name: "May", value: 6000, date: "2024-05" },
    { name: "Jun", value: 5500, date: "2024-06" },
  ];
}

export async function getUserActivityData(): Promise<ChartData[]> {
  await delay(500);
  
  return [
    { name: "Mon", value: 120, date: "2024-06-24" },
    { name: "Tue", value: 150, date: "2024-06-25" },
    { name: "Wed", value: 180, date: "2024-06-26" },
    { name: "Thu", value: 140, date: "2024-06-27" },
    { name: "Fri", value: 200, date: "2024-06-28" },
    { name: "Sat", value: 160, date: "2024-06-29" },
    { name: "Sun", value: 130, date: "2024-06-30" },
  ];
}