import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("px-6 py-3 rounded-lg font-medium transition", className)}
      {...props}
    />
  );
}
