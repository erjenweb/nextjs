import { NextResponse,NextRequest  } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || '';

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const filter = searchParams.get('filter') || {} // or searchParams.getAll('filter')

  const client = await MongoClient.connect(uri);
  const db = client.db(); // default DB from URI
  const voertuigen = db.collection("voertuigen");
  const allDocs = await voertuigen.find(filter, { projection: { remarks_nl: 0 } }).toArray();


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