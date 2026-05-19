"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

interface ImageCropModalProps {
  src: string;
  onCrop: (dataUrl: string) => void;
  onCancel: () => void;
}

const OUTPUT_SIZE = 600;

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function pinchDistance(t: React.TouchList | TouchList) {
  const dx = t[0].clientX - t[1].clientX;
  const dy = t[0].clientY - t[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

const ImageCropModal: React.FC<ImageCropModalProps> = ({ src, onCrop, onCancel }) => {
  useBodyScrollLock();

  // ── Refs that drive the live transform (no setState during gesture) ──────
  const txRef        = useRef(0);           // image left offset in viewport
  const tyRef        = useRef(0);           // image top offset in viewport
  const scaleRef     = useRef(1);           // current scale factor
  const minScaleRef  = useRef(1);           // smallest allowed scale
  const maxScaleRef  = useRef(5);
  const natWRef      = useRef(0);
  const natHRef      = useRef(0);
  const cropSzRef    = useRef(300);

  const imgEl        = useRef<HTMLImageElement>(null);
  const viewportEl   = useRef<HTMLDivElement>(null);
  const canvasEl     = useRef<HTMLCanvasElement>(null);
  const sliderEl     = useRef<HTMLInputElement>(null);

  const dragRef  = useRef<{ sx: number; sy: number; stx: number; sty: number } | null>(null);
  const pinchRef = useRef<{ dist: number; scale: number; tx: number; ty: number; mx: number; my: number } | null>(null);

  const [ready, setReady]       = useState(false);
  const [grabbing, setGrabbing] = useState(false);

  // ── Helpers ───────────────────────────────────────────────────────────────

  const constrainOffset = useCallback((tx: number, ty: number, scale: number) => {
    const natW = natWRef.current;
    const natH = natHRef.current;
    const cz   = cropSzRef.current;
    const dw   = natW * scale;
    const dh   = natH * scale;
    return {
      tx: dw >= cz ? clamp(tx, cz - dw, 0) : (cz - dw) / 2,
      ty: dh >= cz ? clamp(ty, cz - dh, 0) : (cz - dh) / 2,
    };
  }, []);

  const pushTransform = useCallback(() => {
    if (!imgEl.current) return;
    imgEl.current.style.transform = `translate(${txRef.current}px,${tyRef.current}px) scale(${scaleRef.current})`;
    if (sliderEl.current) sliderEl.current.value = String(scaleRef.current);
  }, []);

  // ── Load image & initialise ───────────────────────────────────────────────

  useEffect(() => {
    const cz = Math.min(
      typeof window !== "undefined" ? window.innerWidth - 40 : 300,
      340
    );
    cropSzRef.current = cz;

    const img = new Image();
    img.onload = () => {
      const natW = img.naturalWidth;
      const natH = img.naturalHeight;
      natWRef.current = natW;
      natHRef.current = natH;

      // min scale fills the circle (covers shorter side)
      const minScale = Math.max(cz / natW, cz / natH);
      minScaleRef.current = minScale;
      maxScaleRef.current = minScale * 5;
      scaleRef.current    = minScale;

      // centre
      const { tx, ty } = constrainOffset(0, 0, minScale);
      txRef.current = tx;
      tyRef.current = ty;

      if (sliderEl.current) {
        sliderEl.current.min   = String(minScale);
        sliderEl.current.max   = String(minScale * 5);
        sliderEl.current.step  = String(minScale * 0.002);
        sliderEl.current.value = String(minScale);
      }
      pushTransform();
      setReady(true);
    };
    img.src = src;
  }, [src, constrainOffset, pushTransform]);

  // ── Zoom helper (pivot in viewport coords) ────────────────────────────────

  const applyScale = useCallback((newScale: number, pivotX: number, pivotY: number) => {
    newScale = clamp(newScale, minScaleRef.current, maxScaleRef.current);
    const ratio = newScale / scaleRef.current;
    const newTx = pivotX - (pivotX - txRef.current) * ratio;
    const newTy = pivotY - (pivotY - tyRef.current) * ratio;
    const { tx, ty } = constrainOffset(newTx, newTy, newScale);
    scaleRef.current = newScale;
    txRef.current = tx;
    tyRef.current = ty;
    pushTransform();
  }, [constrainOffset, pushTransform]);

  // ── Pointer handlers ──────────────────────────────────────────────────────

  const onDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if ("touches" in e && e.touches.length === 2) {
      dragRef.current = null;
      setGrabbing(false);
      const rect = viewportEl.current?.getBoundingClientRect();
      pinchRef.current = {
        dist:  pinchDistance(e.touches),
        scale: scaleRef.current,
        tx:    txRef.current,
        ty:    tyRef.current,
        mx:    rect ? (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left : cropSzRef.current / 2,
        my:    rect ? (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top  : cropSzRef.current / 2,
      };
      return;
    }
    pinchRef.current = null;
    setGrabbing(true);
    const pt = "touches" in e ? e.touches[0] : e;
    dragRef.current = { sx: pt.clientX, sy: pt.clientY, stx: txRef.current, sty: tyRef.current };
  }, []);

  const onMove = useCallback((e: MouseEvent | TouchEvent) => {
    // Two-finger pinch
    if ("touches" in e && (e as TouchEvent).touches.length === 2 && pinchRef.current) {
      e.preventDefault();
      const t = (e as TouchEvent).touches;
      const newDist  = pinchDistance(t as unknown as TouchList);
      const newScale = clamp(
        pinchRef.current.scale * (newDist / pinchRef.current.dist),
        minScaleRef.current,
        maxScaleRef.current
      );
      applyScale(newScale, pinchRef.current.mx, pinchRef.current.my);
      return;
    }
    // Single-pointer pan
    if (!dragRef.current) return;
    let cx: number, cy: number;
    if ("touches" in e) {
      const t = (e as TouchEvent).touches;
      if (t.length === 0) return;
      cx = t[0].clientX; cy = t[0].clientY;
    } else {
      cx = (e as MouseEvent).clientX; cy = (e as MouseEvent).clientY;
    }
    const newTx = dragRef.current.stx + (cx - dragRef.current.sx);
    const newTy = dragRef.current.sty + (cy - dragRef.current.sy);
    const { tx, ty } = constrainOffset(newTx, newTy, scaleRef.current);
    txRef.current = tx;
    tyRef.current = ty;
    pushTransform();
  }, [applyScale, constrainOffset, pushTransform]);

  const onUp = useCallback(() => {
    setGrabbing(false);
    dragRef.current  = null;
    pinchRef.current = null;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("touchmove",  onMove, { passive: false });
    window.addEventListener("touchend",   onUp);
    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("touchmove",  onMove);
      window.removeEventListener("touchend",   onUp);
    };
  }, [onMove, onUp]);

  // ── Slider ────────────────────────────────────────────────────────────────

  const onSlider = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const cz = cropSzRef.current;
    applyScale(Number(e.target.value), cz / 2, cz / 2);
  }, [applyScale]);

  // ── Export ────────────────────────────────────────────────────────────────

  const handleCrop = useCallback(() => {
    const canvas = canvasEl.current;
    if (!canvas || !ready) return;
    const natW  = natWRef.current;
    const natH  = natHRef.current;
    const scale = scaleRef.current;
    const cz    = cropSzRef.current;

    // Viewport area in natural-image coordinates
    const srcX = -txRef.current / scale;
    const srcY = -tyRef.current / scale;
    const srcW =  cz / scale;
    const srcH =  cz / scale;

    canvas.width  = OUTPUT_SIZE;
    canvas.height = OUTPUT_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, OUTPUT_SIZE, OUTPUT_SIZE);
      onCrop(canvas.toDataURL("image/jpeg", 0.92));
    };
    img.src = src;
  }, [ready, src, onCrop]);

  const cz = cropSzRef.current;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "#111",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 0,
    }}>
      <canvas ref={canvasEl} style={{ display: "none" }} />

      {/* ── Header ── */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px",
        paddingTop: "max(14px, env(safe-area-inset-top, 14px))",
      }}>
        <button
          onClick={onCancel}
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 999,
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            padding: "7px 16px",
            backdropFilter: "blur(6px)",
          }}
        >
          Cancel
        </button>
        <span style={{ color: "#fff", fontSize: 16, fontWeight: 600, letterSpacing: 0.1 }}>
          Move and Scale
        </span>
        <button
          onClick={handleCrop}
          disabled={!ready}
          style={{
            background: ready ? "#22c55e" : "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: 999,
            color: ready ? "#fff" : "rgba(255,255,255,0.3)",
            fontSize: 14,
            fontWeight: 700,
            cursor: ready ? "pointer" : "default",
            padding: "7px 16px",
            transition: "background 0.15s",
          }}
        >
          Choose
        </button>
      </div>

      {/* ── Crop viewport ── */}
      <div
        ref={viewportEl}
        onMouseDown={onDown}
        onTouchStart={onDown}
        style={{
          position: "relative",
          width: cz,
          height: cz,
          borderRadius: "50%",
          overflow: "hidden",
          cursor: grabbing ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none",
          flexShrink: 0,
          // Vignette ring effect via box-shadow spread
          boxShadow: "0 0 0 9999px rgba(17,17,17,0.88), 0 0 0 2.5px rgba(255,255,255,0.55)",
        }}
      >
        <img
          ref={imgEl}
          src={src}
          draggable={false}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: natWRef.current || "auto",
            height: natHRef.current || "auto",
            maxWidth: "none",
            pointerEvents: "none",
            willChange: "transform",
            transformOrigin: "0 0",
          }}
        />

        {/* Rule-of-thirds grid */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox={`0 0 ${cz} ${cz}`}
          preserveAspectRatio="none"
        >
          {[1, 2].map((i) => (
            <React.Fragment key={i}>
              <line
                x1={cz * i / 3} y1={0}  x2={cz * i / 3} y2={cz}
                stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"
              />
              <line
                x1={0} y1={cz * i / 3}  x2={cz} y2={cz * i / 3}
                stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Loading shimmer */}
        {!ready && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: 28,
              height: 28,
              border: "3px solid rgba(255,255,255,0.15)",
              borderTopColor: "#fff",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}
      </div>

      {/* ── Zoom slider ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginTop: 36,
        width: cz,
        position: "relative",
        zIndex: 1,
      }}>
        {/* Minus icon */}
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="8" y1="11" x2="14" y2="11" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          ref={sliderEl}
          type="range"
          onChange={onSlider}
          style={{
            flex: 1,
            accentColor: "#22c55e",
            cursor: "pointer",
            height: 3,
          }}
        />

        {/* Plus icon */}
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <p style={{
        color: "rgba(255,255,255,0.65)",
        fontSize: 12,
        margin: "10px 0 0",
        letterSpacing: 0.3,
        position: "relative",
        zIndex: 1,
      }}>
        Drag to reposition · Pinch or slide to zoom
      </p>
    </div>
  );
};

export default ImageCropModal;
