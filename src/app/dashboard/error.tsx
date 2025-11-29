"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-card lg:border-r lg:border-border lg:flex-shrink-0">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          </div>
        </div>
      </div>
      
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md mx-auto p-6">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-foreground">Something went wrong!</h2>
            <p className="text-muted-foreground mt-2">
              We encountered an error while loading your dashboard. Please try again or contact support if the problem persists.
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={reset} variant="default">
              Try again
            </Button>
            <Button 
              onClick={() => router.push("/")} 
              variant="outline"
            >
              Go home
            </Button>
          </div>

          {process.env.NODE_ENV === "development" && (
            <details className="mt-4 text-left">
              <summary className="text-sm text-muted-foreground cursor-pointer">
                Error details
              </summary>
              <pre className="mt-2 text-xs bg-muted p-3 rounded-md overflow-auto">
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}