"use client";

import { DataTable, TableColumn } from "@/components/dashboard/data-table";
import { Badge } from "@/components/ui/badge";

// Mock user data
const users = [
  {
    id: "USR001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    joinDate: "2024-01-15",
  },
  {
    id: "USR002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
    lastActive: "5 minutes ago",
    joinDate: "2024-02-20",
  },
  {
    id: "USR003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "User",
    status: "Inactive",
    lastActive: "3 days ago",
    joinDate: "2024-01-10",
  },
  {
    id: "USR004",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "Manager",
    status: "Active",
    lastActive: "1 hour ago",
    joinDate: "2024-03-05",
  },
  {
    id: "USR005",
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    role: "User",
    status: "Active",
    lastActive: "30 minutes ago",
    joinDate: "2024-02-15",
  },
];

const columns: TableColumn[] = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "role",
    label: "Role",
    sortable: true,
    render: (value: string) => (
      <Badge variant={value === "Admin" ? "default" : value === "Manager" ? "secondary" : "outline"}>
        {value}
      </Badge>
    ),
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value: string) => (
      <Badge variant={value === "Active" ? "default" : "secondary"}>
        {value}
      </Badge>
    ),
  },
  {
    key: "lastActive",
    label: "Last Active",
    sortable: true,
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Users</h1>
        <p className="text-muted-foreground mt-2">
          Manage your application users and their permissions.
        </p>
      </div>

      <DataTable
        data={users}
        columns={columns}
        title="User Management"
        searchPlaceholder="Search users..."
      />
    </div>
  );
}