"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { FilterBar } from "@/components/dashboard/filter-bar";
import { DataTable, TableColumn } from "@/components/dashboard/data-table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartComponent } from "@/components/dashboard/charts";

// Mock analytics data
const analyticsData = [
  {
    id: "ANL001",
    campaign: "Summer Sale 2024",
    channel: "Email",
    status: "Active",
    impressions: 45231,
    clicks: 2350,
    conversions: 123,
    revenue: 8923,
    date: "2024-06-15",
    category: "marketing",
  },
  {
    id: "ANL002",
    campaign: "Product Launch",
    channel: "Social Media",
    status: "Active",
    impressions: 78456,
    clicks: 3421,
    conversions: 234,
    revenue: 15678,
    date: "2024-06-10",
    category: "marketing",
  },
  {
    id: "ANL003",
    campaign: "Webinar Series",
    channel: "Content",
    status: "Completed",
    impressions: 23456,
    clicks: 1234,
    conversions: 89,
    revenue: 4567,
    date: "2024-05-28",
    category: "development",
  },
  {
    id: "ANL004",
    campaign: "Customer Support",
    channel: "Direct",
    status: "Active",
    impressions: 12345,
    clicks: 876,
    conversions: 45,
    revenue: 2345,
    date: "2024-06-20",
    category: "support",
  },
  {
    id: "ANL005",
    campaign: "Holiday Promotion",
    channel: "Email",
    status: "Pending",
    impressions: 0,
    clicks: 0,
    conversions: 0,
    revenue: 0,
    date: "2024-07-01",
    category: "sales",
  },
];

const columns: TableColumn[] = [
  {
    key: "campaign",
    label: "Campaign",
    sortable: true,
  },
  {
    key: "channel",
    label: "Channel",
    sortable: true,
    render: (value: string) => (
      <Badge variant="outline">{value}</Badge>
    ),
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value: string) => (
      <Badge 
        variant={
          value === "Active" ? "default" : 
          value === "Completed" ? "secondary" : 
          "outline"
        }
      >
        {value}
      </Badge>
    ),
  },
  {
    key: "impressions",
    label: "Impressions",
    sortable: true,
    render: (value: number) => value.toLocaleString(),
  },
  {
    key: "clicks",
    label: "Clicks",
    sortable: true,
    render: (value: number) => value.toLocaleString(),
  },
  {
    key: "conversions",
    label: "Conversions",
    sortable: true,
    render: (value: number) => value.toLocaleString(),
  },
  {
    key: "revenue",
    label: "Revenue",
    sortable: true,
    render: (value: number) => `$${value.toLocaleString()}`,
  },
];

// Chart data
const performanceData = [
  { name: "Mon", value: 4000, date: "2024-06-24" },
  { name: "Tue", value: 3000, date: "2024-06-25" },
  { name: "Wed", value: 2000, date: "2024-06-26" },
  { name: "Thu", value: 2780, date: "2024-06-27" },
  { name: "Fri", value: 1890, date: "2024-06-28" },
  { name: "Sat", value: 2390, date: "2024-06-29" },
  { name: "Sun", value: 3490, date: "2024-06-30" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Track your marketing campaigns and performance metrics.
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar />

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">182,488</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,661</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">491</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$31,513</div>
            <p className="text-xs text-muted-foreground">+23.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <BarChartComponent 
        data={performanceData} 
        title="Weekly Performance Overview" 
      />

      {/* Campaigns Table */}
      <DataTable
        data={analyticsData}
        columns={columns}
        title="Campaign Performance"
        searchPlaceholder="Search campaigns..."
      />
    </div>
  );
}