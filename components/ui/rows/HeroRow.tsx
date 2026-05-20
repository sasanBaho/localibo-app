export default function HeroRow() {
  return (
    <section style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid #000" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
        Beauty, Tailor & Cook
        <br />
        Services from Trusted Locals
      </h1>
      <p style={{ fontSize: 18, color: "#444", marginBottom: 24 }}>
        Connect with local beauty professionals, tailors, and cooks near you — all in one place.
      </p>
      <button style={{ background: "#3cb371", color: "#fff", border: 0, borderRadius: 4, padding: "12px 32px", fontSize: 18, cursor: "pointer" }}>
        Get the Localibo app
      </button>
    </section>
  );
}
