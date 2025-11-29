import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

export const CustomCard = ({ 
  className, 
  variant = "default", 
  children, 
  ...props 
}: CardProps) => {
  const variants = {
    default: "rounded-lg border bg-card text-card-foreground shadow-sm",
    elevated: "rounded-lg border bg-card text-card-foreground shadow-lg",
    outlined: "rounded-lg border-2 border-border bg-card text-card-foreground",
  };

  return (
    <div
      className={cn(
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CustomCardHeader = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);

export const CustomCardTitle = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

export const CustomCardDescription = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export const CustomCardContent = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

export const CustomCardFooter = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);