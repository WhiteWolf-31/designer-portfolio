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
          "!mb-2 !mr-2 w-[min(92vw,20rem)] rounded-2xl border border-[#D3F64A]/20 bg-[#121212]/95 p-3 text-foreground shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-md sm:w-[18rem]",
        classNames: {
          toast: "gap-3",
          title: "ml-2 font-display text-sm font-medium tracking-[0.08em] text-[#D3F64A] leading-none",
          description: "hidden",
          actionButton: "bg-[#D3F64A] text-neutral-950",
          cancelButton: "bg-muted text-foreground",
          closeButton:
            "border border-[#D3F64A]/20 bg-[#1a1a1a] text-[#D3F64A] !h-6 !w-6 !min-h-0 !min-w-0 !p-0 text-[0.7rem]",
        },
        style: {
          fontFamily: '"Inter", sans-serif',
        },
      }}
      icons={{
        success: (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D3F64A] text-sm font-black text-neutral-950">
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
