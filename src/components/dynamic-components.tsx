import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamic imports for code splitting
export const DynamicLineChart = dynamic(
  () => import("@/components/dashboard/charts").then((mod) => mod.LineChartComponent),
  {
    loading: () => <Skeleton className="h-[300px] w-full" />,
    ssr: false,
  }
);

export const DynamicAreaChart = dynamic(
  () => import("@/components/dashboard/charts").then((mod) => mod.AreaChartComponent),
  {
    loading: () => <Skeleton className="h-[300px] w-full" />,
    ssr: false,
  }
);

export const DynamicBarChart = dynamic(
  () => import("@/components/dashboard/charts").then((mod) => mod.BarChartComponent),
  {
    loading: () => <Skeleton className="h-[300px] w-full" />,
    ssr: false,
  }
);

export const DynamicPieChart = dynamic(
  () => import("@/components/dashboard/charts").then((mod) => mod.PieChartComponent),
  {
    loading: () => <Skeleton className="h-[300px] w-full" />,
    ssr: false,
  }
);

export const DynamicDataTable = dynamic(
  () => import("@/components/dashboard/data-table").then((mod) => mod.DataTable),
  {
    loading: () => (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    ),
    ssr: false,
  }
);

export const DynamicFilterBar = dynamic(
  () => import("@/components/dashboard/filter-bar").then((mod) => mod.FilterBar),
  {
    loading: () => <Skeleton className="h-20 w-full" />,
    ssr: false,
  }
);

export const DynamicMetricCard = dynamic(
  () => import("@/components/dashboard/metric-card").then((mod) => mod.MetricCard),
  {
    loading: () => <Skeleton className="h-32 w-full" />,
    ssr: true, // Metric cards can be server-rendered
  }
);

// Heavy components that should only load on client side
export const DynamicAccessibilityHelper = dynamic(
  () => import("@/components/accessibility").then((mod) => mod.AccessibilityHelper),
  {
    loading: () => <Skeleton className="h-48 w-full" />,
    ssr: false,
  }
);

export const DynamicAccessibilityStatus = dynamic(
  () => import("@/components/accessibility").then((mod) => mod.AccessibilityStatus),
  {
    loading: () => <Skeleton className="h-64 w-full" />,
    ssr: false,
  }
);