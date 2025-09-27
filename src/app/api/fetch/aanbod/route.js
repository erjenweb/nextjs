import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI; // MongoDB URI in .env.local
export async function GET(request) {
  const client = await MongoClient.connect(uri);
  const db = client.db(); // default DB from URI
  const voertuigen = db.collection("voertuigen");
  const allDocs = await voertuigen.find({}, { projection: { raw: 0, remarks_nl: 0, remarks_en: 0 } }).toArray();


  return new NextResponse(
    JSON.stringify(allDocs),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}