import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a2332" }}>
      <header style={{ background: "#0f2744", color: "white", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>Buy Buy Breaker</strong>
        <nav>
          <Link href="/search" style={{ color: "white", marginRight: 16 }}>Search</Link>
          <Link href="/sign-in" style={{ color: "white", marginRight: 16 }}>Sign In</Link>
          <Link href="/sign-up" style={{ color: "white", marginRight: 16 }}>Create Account</Link>
          <Link href="/sell" style={{ background: "#c45c26", color: "white", padding: "8px 14px", textDecoration: "none" }}>
            Sell Equipment
          </Link>
        </nav>
      </header>

      <section style={{ background: "#0f2744", color: "white", padding: "48px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>Find the Electrical Equipment You Need.</h1>
        <p style={{ maxWidth: 640, margin: "0 auto 24px" }}>
          The contractor-to-contractor marketplace for buying and selling surplus electrical equipment.
        </p>
        <form action="/search" style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          <input
            name="q"
            placeholder="Search by Part Number, Manufacturer or Keyword"
            style={{ padding: 14, width: 420, maxWidth: "100%" }}
          />
          <button type="submit" style={{ padding: "14px 20px", background: "#c45c26", color: "white", border: 0 }}>
            Search
          </button>
        </form>
        <p style={{ marginTop: 12, fontSize: 14 }}>Example searches: LB3400F, HFD63B150, TJD432400</p>
        <p style={{ marginTop: 16 }}>
          <Link href="/sell" style={{ color: "white" }}>Sell Equipment</Link>
        </p>
      </section>

      <section style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
        <h2>Shop by Category</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          {[
            "Circuit Breakers",
            "Disconnects",
            "Switchgear",
            "Motor Controls & Starters",
            "Transformers",
            "Bus Plugs",
            "Contactors",
            "Panels & Components",
          ].map((name) => (
            <Link key={name} href={"/search?category=" + encodeURIComponent(name)} style={{ border: "1px solid #d5dde6", padding: 16, textDecoration: "none", color: "#1a2332" }}>
              {name}
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
        <h2>Shop by Manufacturer</h2>
        <p>Square D · Eaton / Cutler-Hammer · Siemens · GE · ABB</p>
      </section>

      <section style={{ padding: 32, background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>Built for Electrical Professionals</h2>
          <ul>
            <li>Search by exact part number</li>
            <li>Detailed electrical specifications</li>
            <li>Professional seller profiles</li>
            <li>Secure marketplace payments</li>
            <li>Nationwide buying and selling</li>
          </ul>
        </div>
      </section>

      <section style={{ background: "#0f2744", color: "white", padding: 40, textAlign: "center" }}>
        <h2>Have Electrical Equipment to Sell?</h2>
        <p>Turn excess and surplus electrical inventory into cash by selling directly to contractors looking for it.</p>
        <Link href="/sell" style={{ display: "inline-block", marginTop: 16, background: "#c45c26", color: "white", padding: "12px 18px", textDecoration: "none" }}>
          Start Selling
        </Link>
      </section>
    </div>
  );
}
