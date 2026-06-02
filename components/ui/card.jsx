import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return <div className={cn("glass rounded-lg", className)} {...props} />;
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("border-b border-white/10 p-4", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-4", className)} {...props} />;
}
