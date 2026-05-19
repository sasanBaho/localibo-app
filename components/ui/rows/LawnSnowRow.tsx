import Image from "next/image";

export default function LawnSnowRow() {
  return (
    <section style={{ display: "flex", gap: 24, justifyContent: "center", padding: "32px 0 0 0", borderTop: "1px solid #000" }}>
      <div style={{ width: 400, height: 250, background: "#ddd", borderRadius: 8, overflow: "hidden" }}>
        <Image src="/placeholder.svg" alt="Lawn mowing" width={400} height={250} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      <div style={{ width: 400, height: 250, background: "#ddd", borderRadius: 8, overflow: "hidden" }}>
        <Image src="/placeholder.svg" alt="Snow removal" width={400} height={250} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
    </section>
  );
}
