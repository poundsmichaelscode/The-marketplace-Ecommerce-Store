import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, description, className }: { eyebrow?: string; title: string; description?: string; className?: string }) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-marketCream">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-marketDark sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-marketDark/65">{description}</p>}
    </div>
  );
}
