"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Filter, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FilterOption {
  value: string;
  label: string;
}

interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}

interface FilterBarProps {
  onFiltersChange?: (filters: {
    dateRange: DateRange;
    status: string;
    category: string;
    search: string;
  }) => void;
  className?: string;
}

const statusOptions: FilterOption[] = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
];

const categoryOptions: FilterOption[] = [
  { value: "all", label: "All Categories" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "development", label: "Development" },
  { value: "support", label: "Support" },
];

export function FilterBar({ onFiltersChange, className }: FilterBarProps) {
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const hasActiveFilters = dateRange.from || status !== "all" || category !== "all" || search;

  const clearFilters = () => {
    setDateRange({ from: undefined, to: undefined });
    setStatus("all");
    setCategory("all");
    setSearch("");
  };

  const updateFilters = () => {
    onFiltersChange?.({
      dateRange,
      status,
      category,
      search,
    });
  };

  // Update filters when any filter changes
  useState(() => {
    updateFilters();
  });

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="h-8"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Search</label>
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Date Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Date Range</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {dateRange.from && (
              <Badge variant="secondary" className="gap-1">
                <CalendarIcon className="h-3 w-3" />
                {dateRange.from && format(dateRange.from, "LLL dd, y")}
                {dateRange.to && ` - ${format(dateRange.to, "LLL dd, y")}`}
              </Badge>
            )}
            {status !== "all" && (
              <Badge variant="secondary">
                Status: {statusOptions.find(opt => opt.value === status)?.label}
              </Badge>
            )}
            {category !== "all" && (
              <Badge variant="secondary">
                Category: {categoryOptions.find(opt => opt.value === category)?.label}
              </Badge>
            )}
            {search && (
              <Badge variant="secondary">
                Search: "{search}"
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}