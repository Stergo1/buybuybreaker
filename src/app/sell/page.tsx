"use client";

import { useState } from "react";

export default function SellPage() {
  const [status, setStatus] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Saving...");
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());

    const res = await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStatus("Listing saved. It should now appear in Search.");
      e.currentTarget.reset();
    } else {
      setStatus("Could not save. Check the listing and try again.");
    }
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a2332" }}>
      <header style={{ background: "#0f2744", color: "white", padding: "16px 24px", display: "flex", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Buy Buy Breaker</a>
        <a href="/sell" style={{ background: "#c45c26", color: "white", padding: "8px 14px", textDecoration: "none" }}>Sell Equipment</a>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
        <h1>Sell Equipment</h1>
        <p>List surplus electrical equipment for contractors.</p>
        {status ? <p style={{ background: "#f4f6f8", padding: 12 }}>{status}</p> : null}

        <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
          <label>Title<input name="title" required style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>Manufacturer<input name="manufacturer" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>Part / model number<input name="partNumber" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>
            Category
            <select name="category" style={{ width: "100%", padding: 10, marginTop: 6 }}>
              <option>Circuit Breakers</option>
              <option>Disconnects</option>
              <option>Switchgear</option>
              <option>Motor Controls & Starters</option>
              <option>Transformers</option>
              <option>Bus Plugs</option>
              <option>Contactors</option>
              <option>Panels & Components</option>
            </select>
          </label>
          <label>
            Condition
            <select name="condition" style={{ width: "100%", padding: 10, marginTop: 6 }}>
              <option>New</option>
              <option>Used</option>
              <option>Refurbished</option>
              <option>Surplus</option>
            </select>
          </label>
          <label>Amps / Voltage / Poles<input name="specs" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>Price<input name="price" type="number" step="0.01" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>Quantity<input name="quantity" type="number" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label style={{ gridColumn: "1 / -1" }}>Description<textarea name="description" rows={5} style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>City<input name="city" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <label>State<input name="state" style={{ width: "100%", padding: 10, marginTop: 6 }} /></label>
          <button type="submit" style={{ gridColumn: "1 / -1", background: "#c45c26", color: "white", padding: 14, border: 0 }}>
            Publish listing
          </button>
        </form>
      </main>
    </div>
  );
}
