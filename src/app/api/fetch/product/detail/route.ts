import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI!;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const hexon_nr = searchParams.get("hexon_nr");
    const id = searchParams.get("id");

    const client = await MongoClient.connect(uri);
    const db = client.db();
    const voertuigen = db.collection("voertuigen");



    let car;
    if (hexon_nr) {
      car = await voertuigen.findOne({ hexon_nr }, { projection: { raw: 0 } });
    } else if (id) {
      car = await voertuigen.findOne({ _id: new ObjectId(id) });
    }

    await client.close();

    if (!car) {
      return NextResponse.json({ error: "Car not found " + hexon_nr }, { status: 404 });
    }

    return NextResponse.json(car, { status: 200 });
  } catch (err) {
    console.error("Fetch car error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
