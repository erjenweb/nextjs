import { NextResponse,NextRequest  } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || '';

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const filter = searchParams.get('filter') || {};

    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') ?? '10')));
    const skip = (page - 1) * limit;


  const client = await MongoClient.connect(uri);
  const db = client.db(); // default DB from URI
  const voertuigen = db.collection("voertuigen");
  const allDocs = await voertuigen.find(filter, { projection: { } }) .skip(skip).limit(limit).toArray();


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