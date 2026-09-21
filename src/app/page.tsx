export default function HomePage() {
  return (
    <div>
      <section style={{ background: "#0f2744", color: "white", padding: "64px 16px", textAlign: "center" }}>
        <p>Electrical equipment marketplace</p>
        <h1>Find the breaker. Fast.</h1>
        <p>Search by part number, manufacturer, or keyword.</p>
        <form action="/search" style={{ marginTop: 24 }}>
          <input
            name="q"
            placeholder="Enter breaker part number"
            style={{ padding: 12, width: 280 }}
          />
          <button type="submit" style={{ padding: 12, marginLeft: 8, background: "#c45c26", color: "white", border: 0 }}>
            Search
          </button>
        </form>
      </section>
    </div>
  );
}
