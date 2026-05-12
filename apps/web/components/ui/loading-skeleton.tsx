export function LoadingSkeleton({ className = "h-48" }: { className?: string }) {
  return <div className={`animate-pulse rounded-[2rem] bg-gradient-to-r from-marketLight/70 via-white to-marketLight/70 ${className}`} />;
}
