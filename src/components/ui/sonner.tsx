import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="bottom-right"
      expand={false}
      closeButton
      visibleToasts={3}
      className="toaster group"
      toastOptions={{
        duration: 5000,
        className:
          "!mb-2 !mr-2 !max-w-[calc(100vw-1rem)] !w-[min(22rem,calc(100vw-1rem))] rounded-2xl border border-[color-mix(in_oklch,var(--color-accent)_28%,transparent)] bg-[color-mix(in_oklch,var(--color-background)_94%,transparent)] p-3 text-foreground shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-md sm:!mr-4 sm:!w-[22rem]",
        classNames: {
          toast: "gap-3",
          title:
            "ml-2 font-display text-sm font-medium tracking-[0.08em] text-accent leading-tight",
          description: "hidden",
          actionButton: "bg-accent text-accent-foreground",
          cancelButton: "bg-muted text-foreground",
          closeButton:
            "border border-accent/20 bg-surface text-accent !h-6 !w-6 !min-h-0 !min-w-0 !p-0 text-[0.7rem]",
        },
        style: {
          fontFamily: "var(--font-sans)",
        },
      }}
      icons={{
        success: (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-accent-foreground">
            ✓
          </span>
        ),
        error: (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f87171] text-sm font-black text-white">
            !
          </span>
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
