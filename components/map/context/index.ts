import { createContext, useContext } from "react";
import type { MapContextValue, MarkerContextValue } from "../types";

// ─── Map Context ────────────────────────────────────────────────────────────

export const MapContext = createContext<MapContextValue | null>(null);

export function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a Map component");
  }
  return context;
}

// ─── Marker Context ──────────────────────────────────────────────────────────

export const MarkerContext = createContext<MarkerContextValue | null>(null);

export function useMarkerContext() {
  const context = useContext(MarkerContext);
  if (!context) {
    throw new Error("Marker components must be used within MapMarker");
  }
  return context;
}
