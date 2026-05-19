import Image from "next/image";

export default function TestimonialRow() {
  return (
    <section style={{ display: "flex", gap: 32, justifyContent: "center", alignItems: "center", padding: "32px 0", borderTop: "1px solid #000" }}>
      <div style={{ width: 320, height: 320, background: "#ddd", borderRadius: 8, overflow: "hidden" }}>
        <Image src="/placeholder.svg" alt="Yard work" width={320} height={320} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      <div style={{ maxWidth: 400, textAlign: "left" }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
          I made $246 cleaning leaves and snow removing with Yardyman app in 10 days.
        </h2>
        <p style={{ fontSize: 16, marginBottom: 16 }}>
          You can start your own side job too.
        </p>
        <button style={{ background: "#3cb371", color: "#fff", border: 0, borderRadius: 4, padding: "10px 24px", fontSize: 16, cursor: "pointer" }}>
          Start your side hustle
        </button>
        <div style={{ fontSize: 13, color: "#888", marginTop: 12 }}>MAKE MONEY ASSISTING NEIGHBORS WITH YARD WORK</div>
      </div>
    </section>
  );
}
