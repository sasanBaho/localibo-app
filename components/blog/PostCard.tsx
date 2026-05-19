"use client";
import React, { useState } from "react";
import Link from "next/link";

interface PostCardProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  accent: string;
  iconPath: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  slug,
  category,
  title,
  excerpt,
  readTime,
  date,
  accent,
  iconPath,
  image,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: hovered ? "0 6px 24px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.06)",
          border: "1px solid #f3f4f6",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "box-shadow 0.15s, transform 0.15s",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        {/* Image / icon thumbnail — LEFT */}
        <div style={{
          width: 110,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          background: `${accent}12`,
        }}>
          {image ? (
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.2s",
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
            />
          ) : (
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <path d={iconPath} />
              </svg>
            </div>
          )}
        </div>

        {/* Text side — RIGHT */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          {/* Color accent strip */}
          <div style={{ height: 4, background: accent, flexShrink: 0 }} />

          <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Category + meta */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                color: accent,
                background: `${accent}15`,
                borderRadius: 999,
                padding: "2px 10px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}>
                {category}
              </span>
              <span style={{ fontSize: 12, color: "#9ca3af" }}>{date}</span>
              <span style={{ fontSize: 12, color: "#9ca3af" }}>· {readTime} read</span>
            </div>

            {/* Title */}
            <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>
              {title}
            </h3>

            {/* Excerpt */}
            <p style={{ margin: "0 0 12px", fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>
              {excerpt}
            </p>

            {/* Read more */}
            <span style={{
              fontSize: 13,
              fontWeight: 700,
              color: accent,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}>
              Read article
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
