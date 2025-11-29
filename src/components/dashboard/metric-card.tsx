import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  progress?: number;
  description?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel = "from last month",
  icon,
  progress,
  description,
  trend,
  className,
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (!change) return null;
    
    if (change > 0) return <TrendingUp className="h-3 w-3" />;
    if (change < 0) return <TrendingDown className="h-3 w-3" />;
    return <Minus className="h-3 w-3" />;
  };

  const getTrendColor = () => {
    if (!change) return "text-muted-foreground";
    
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-muted-foreground";
  };

  const getTrendBadgeVariant = () => {
    if (!change) return "secondary";
    
    if (change > 0) return "default";
    if (change < 0) return "destructive";
    return "secondary";
  };

  return (
    <Card className={cn("relative overflow-hidden metric-card card-hover", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 hover:scale-110">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-foreground transition-colors duration-200">{value}</div>
          
          {change !== undefined && (
            <div className="flex items-center gap-2">
              <Badge variant={getTrendBadgeVariant()} className="text-xs transition-all duration-200 hover:scale-105">
                <span className={cn("flex items-center gap-1", getTrendColor())}>
                  {getTrendIcon()}
                  {change > 0 ? "+" : ""}{change}%
                </span>
              </Badge>
              <span className="text-xs text-muted-foreground">{changeLabel}</span>
            </div>
          )}

          {progress !== undefined && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 transition-all duration-300" />
            </div>
          )}

          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}