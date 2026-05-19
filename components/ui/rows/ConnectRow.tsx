import Image from "next/image";

export default function ConnectRow() {
  return (
    <section style={{ display: "flex", gap: 32, justifyContent: "center", alignItems: "center", padding: "32px 0", borderTop: "1px solid #000" }}>
      <div style={{ maxWidth: 400 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Connecting you with local snow removal service providers
        </h2>
        <p style={{ fontSize: 16, color: "#444" }}>
          <b>Stay worry-free this winter with Yardyman.</b> Our app makes it simple to find and connect with reliable snow removal providers right in your neighborhood. Whether you need a quick one time driveway clearing or ongoing seasonal service, Yardyman helps you compare local options, view ratings, and contact providers directly! No contracts, no hassle. Enjoy a clear, safe property all winter long while supporting hardworking locals in your community.
        </p>
      </div>
      <div style={{ width: 320, height: 320, background: "#ddd", borderRadius: 8, overflow: "hidden" }}>
        <Image src="/placeholder.svg" alt="Snow removal" width={320} height={320} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
    </section>
  );
}
