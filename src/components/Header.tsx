import Link from "next/link";

export function Header() {
  return (
    <header style={{ background: "#0f2744", color: "white", padding: "12px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
        <Link href="/" style={{ color: "white", fontWeight: 700 }}>
          Buy Buy Breaker
        </Link>
        <nav>
          <Link href="/search" style={{ color: "white", marginLeft: 16 }}>Search</Link>
          <Link href="/sell" style={{ color: "white", marginLeft: 16 }}>Sell</Link>
        </nav>
      </div>
    </header>
  );
}
