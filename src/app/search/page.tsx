async function getListings(q: string) {
  const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://buybuybreaker.com";
  const res = await fetch(`${base}/api/listings`, { cache: "no-store" });
  if (!res.ok) return [];
  const listings = await res.json();
  if (!q) return listings;
  const needle = q.toLowerCase();
  return listings.filter((item: any) =>
    [item.title, item.manufacturer, item.part_number, item.category, item.description]
      .join(" ")
      .toLowerCase()
      .includes(needle)
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const params = await searchParams;
  const q = params.q || params.category || "";
  const listings = await getListings(q);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a2332", padding: 32 }}>
      <a href="/">Buy Buy Breaker</a>
      <h1>Search</h1>
      <form action="/search">
        <input name="q" defaultValue={q} placeholder="Part number, manufacturer, or keyword" style={{ padding: 10, width: 360 }} />
        <button type="submit" style={{ marginLeft: 8, padding: 10, background: "#c45c26", color: "white", border: 0 }}>Search</button>
      </form>
      <p>{listings.length} listing(s)</p>
      {listings.map((item: any) => (
        <div key={item.id} style={{ border: "1px solid #d5dde6", padding: 16, marginTop: 12 }}>
          <strong>{item.title}</strong>
          <div>{item.manufacturer} {item.part_number}</div>
          <div>{item.category} · {item.condition}</div>
          <div>{item.price ? `$${item.price}` : ""} {item.city} {item.state}</div>
        </div>
      ))}
    </div>
  );
}
