// Vendors
import * as React from "react";
import { cn } from "@/lib/utils";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex w-full max-w-[480px] flex-col gap-4 rounded-lg border border-none bg-card p-4 text-card-foreground md:border-solid md:p-6",
      className,
    )}
    {...props}
  />
);

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("flex flex-col gap-1", className)} {...props} />;

const CardTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight md:text-3xl",
      className,
    )}
    {...props}
  />
);

const CardDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("flex flex-col gap-4", className)} {...props} />;

const CardSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn("flex items-center gap-4", className)}>
    <div className="flex-grow border-t border-gray-200"></div>
    <span className="text-sm text-gray-500" {...props} />
    <div className="flex-grow border-t border-gray-200"></div>
  </div>
);

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("flex flex-col gap-4", className)} {...props} />;

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardSeparator,
  CardTitle,
};
