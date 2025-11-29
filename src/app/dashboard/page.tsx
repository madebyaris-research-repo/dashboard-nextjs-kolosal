import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { MetricCard } from "@/components/dashboard/metric-card";
import { LineChartComponent, AreaChartComponent } from "@/components/dashboard/charts";
import { getDashboardStats, getRecentActivity, getRevenueData, getUserActivityData } from "@/lib/data";
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Zap } from "lucide-react";

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const activities = await getRecentActivity();
  const revenueData = await getRevenueData();
  const userActivityData = await getUserActivityData();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to your professional dashboard. Monitor your key metrics and performance indicators.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Revenue"
            value={`${stats.totalRevenue.toLocaleString()}`}
            change={stats.revenueChange}
            icon={<DollarSign className="h-4 w-4 text-primary" />}
            description="Monthly recurring revenue"
          />

          <MetricCard
            title="Active Users"
            value={stats.activeUsers.toLocaleString()}
            change={stats.userChange}
            icon={<Users className="h-4 w-4 text-blue-500" />}
            description="Monthly active users"
          />

          <MetricCard
            title="Sales"
            value={stats.sales.toLocaleString()}
            change={stats.salesChange}
            icon={<ShoppingCart className="h-4 w-4 text-purple-500" />}
            description="Total sales this month"
          />

          <MetricCard
            title="Performance"
            value={`${stats.performance}%`}
            change={stats.performanceChange}
            icon={<Zap className="h-4 w-4 text-orange-500" />}
            progress={stats.performance}
            description="System performance score"
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <LineChartComponent 
            data={revenueData} 
            title="Revenue Overview" 
          />
          <AreaChartComponent 
            data={userActivityData} 
            title="User Activity" 
          />
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
                <div 
                  className={`h-2 w-2 rounded-full ${
                    activity.status === "success" ? "bg-green-500" :
                    activity.status === "warning" ? "bg-yellow-500" : "bg-blue-500"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}