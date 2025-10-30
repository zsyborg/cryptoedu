import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb("web3");
    const collectionsInfo = await db.listCollections().toArray();
    const collections = collectionsInfo.map((c) => c.name).sort();
    return NextResponse.json({ ok: true, database: db.databaseName, collections }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}
