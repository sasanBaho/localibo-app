import Image from "next/image";

export default function WhyDownloadRow() {
  return (
    <section style={{ background: "#ececec", padding: "32px 0", borderTop: "1px solid #000" }}>
      <div style={{ display: "flex", gap: 32, justifyContent: "center", alignItems: "flex-start" }}>
        <div style={{ maxWidth: 320 }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Why download Yardyman?</h3>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 16 }}>
            With Yardyman, you can instantly see local people available to help right at the tap. Whether it's clearing your driveway in winter or keeping your lawn fresh in summer, help is just a tap away.
          </p>
          <button style={{ background: "#3cb371", color: "#fff", border: 0, borderRadius: 4, padding: "10px 24px", fontSize: 16, cursor: "pointer" }}>
            Download from App-store
          </button>
        </div>
        <div style={{ width: 200, height: 120, background: "#ddd", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src="/placeholder.svg" alt="Map preview" width={200} height={120} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
        <div style={{ width: 200, height: 120, background: "#ddd", borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src="/placeholder.svg" alt="Direct contact" width={200} height={120} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
      </div>
    </section>
  );
}
