"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Home,
  BarChart3,
  Users,
  TrendingUp,
  Settings,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Reports", href: "/dashboard/reports", icon: TrendingUp },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className={cn("fixed top-4 left-4 z-50 lg:hidden")}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col">
              {/* Logo */}
              <div className="flex h-16 items-center justify-between px-6">
                <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                <ThemeToggle />
              </div>

              <Separator />

              {/* Navigation */}
              <nav className="flex-1 space-y-2 px-3 py-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 hover:translate-x-1",
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-4">
                <Separator className="mb-4" />
                <p className="text-xs text-muted-foreground">
                  © 2024 Dashboard. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar - always visible */}
      <div className={cn("hidden lg:flex lg:flex-col lg:w-64 lg:bg-card lg:border-r lg:border-border lg:flex-shrink-0", className)}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
            <ThemeToggle />
          </div>

          <Separator />

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-3 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 hover:translate-x-1",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4">
            <Separator className="mb-4" />
            <p className="text-xs text-muted-foreground">
              © 2024 Dashboard. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}