import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  const listings = await sql`
    SELECT * FROM listings
    ORDER BY created_at DESC
    LIMIT 50
  `;
  return Response.json(listings);
}

export async function POST(request: Request) {
  const body = await request.json();
  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql`
    INSERT INTO listings (
      title, manufacturer, part_number, category, condition,
      specs, price, quantity, description, city, state, clerk_user_id
    )
    VALUES (
      ${body.title},
      ${body.manufacturer},
      ${body.partNumber},
      ${body.category},
      ${body.condition},
      ${body.specs},
      ${body.price || null},
      ${body.quantity || null},
      ${body.description},
      ${body.city},
      ${body.state},
      ${body.clerkUserId || null}
    )
    RETURNING id
  `;

  return Response.json({ ok: true, id: rows[0].id });
}
