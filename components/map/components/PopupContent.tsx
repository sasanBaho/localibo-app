"use client";

import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type PopupContentProps = {
  children: ReactNode;
  className?: string;
  closeButton?: boolean;
  onClose?: () => void;
  variant?: "popup" | "tooltip";
};

/**
 * Shared styled container for both MapPopup, MarkerPopup, and MarkerTooltip.
 * Renders into a provided DOM container via a portal.
 */
export function PopupContent({
  children,
  className,
  closeButton = false,
  onClose,
  variant = "popup",
  container,
}: PopupContentProps & { container: Element }) {
  if (variant === "tooltip") {
    return createPortal(
      <div
        className={cn(
          "rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-md animate-in fade-in-0 zoom-in-95",
          className
        )}
      >
        {children}
      </div>,
      container
    );
  }

  return createPortal(
    <div
      className={cn(
        "relative rounded-md border bg-popover p-3 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
    >
      {closeButton && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-1 right-1 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
      {children}
    </div>,
    container
  );
}
