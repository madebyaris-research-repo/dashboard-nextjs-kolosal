import { TableSkeleton } from "@/components/ui/enhanced-skeletons";

export default function ReportsLoading() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar skeleton */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-card lg:border-r lg:border-border lg:flex-shrink-0">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="h-6 w-24 bg-muted rounded animate-pulse"></div>
            <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 space-y-2 px-3 py-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-9 bg-muted rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <main className="p-6 lg:p-8">
          <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-8 w-32 bg-muted rounded animate-pulse"></div>
                <div className="h-4 w-64 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-40 bg-muted rounded animate-pulse"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg border bg-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-8 w-16 bg-muted rounded animate-pulse mb-2"></div>
                  <div className="h-3 w-24 bg-muted rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            <TableSkeleton rows={6} />
          </div>
        </main>
      </div>
    </div>
  );
}