"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { DataTable, TableColumn } from "@/components/dashboard/data-table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, TrendingUp } from "lucide-react";

// Mock reports data
const reports = [
  {
    id: "RPT001",
    name: "Monthly Revenue Report",
    type: "Financial",
    status: "Completed",
    generatedDate: "2024-06-28",
    size: "2.4 MB",
    downloads: 145,
  },
  {
    id: "RPT002", 
    name: "User Analytics Q2 2024",
    type: "Analytics",
    status: "Completed",
    generatedDate: "2024-06-25",
    size: "5.1 MB",
    downloads: 89,
  },
  {
    id: "RPT003",
    name: "Performance Metrics",
    type: "Technical",
    status: "Processing",
    generatedDate: "2024-06-29",
    size: "1.2 MB",
    downloads: 0,
  },
  {
    id: "RPT004",
    name: "Customer Satisfaction Survey",
    type: "Survey",
    status: "Scheduled",
    generatedDate: "2024-07-01",
    size: "0 MB",
    downloads: 0,
  },
  {
    id: "RPT005",
    name: "Sales Performance Report",
    type: "Sales",
    status: "Completed",
    generatedDate: "2024-06-27",
    size: "3.7 MB",
    downloads: 234,
  },
];

const columns: TableColumn[] = [
  {
    key: "name",
    label: "Report Name",
    sortable: true,
  },
  {
    key: "type",
    label: "Type",
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
          value === "Completed" ? "default" : 
          value === "Processing" ? "secondary" : 
          "outline"
        }
      >
        {value}
      </Badge>
    ),
  },
  {
    key: "generatedDate",
    label: "Generated Date",
    sortable: true,
  },
  {
    key: "size",
    label: "Size",
    sortable: true,
  },
  {
    key: "downloads",
    label: "Downloads",
    sortable: true,
    render: (value: number) => value.toLocaleString(),
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-2">
            Generate and download various reports for your business insights.
          </p>
        </div>
        <Button className="button-hover">
          <FileText className="h-4 w-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="metric-card card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Reports</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">24</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="metric-card card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Downloads</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Download className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,847</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+23%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="metric-card card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Processing</CardTitle>
            <div className="h-8 w-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-yellow-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Reports in queue
            </p>
          </CardContent>
        </Card>

        <Card className="metric-card card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Storage Used</CardTitle>
            <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">124 MB</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-600">+8%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <DataTable
        data={reports}
        columns={columns}
        title="Available Reports"
        searchPlaceholder="Search reports..."
      />

      {/* Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg">Quick Export</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Export as PDF
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Export as Excel
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Export as CSV
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg">Scheduled Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly Revenue</span>
                <span className="text-muted-foreground">1st of month</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Weekly Analytics</span>
                <span className="text-muted-foreground">Every Monday</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Daily Performance</span>
                <span className="text-muted-foreground">Daily 9 AM</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Monthly report completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Analytics report downloaded</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span>Performance report processing</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}