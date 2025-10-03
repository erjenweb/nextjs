import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { parseStringPromise } from "xml2js";
import downloadImage from "@/lib/downloadImage"

const uri = process.env.MONGODB_URI; // MongoDB URI in .env.local

export async function POST(req) {
  try {
    // 1. Read raw XML body
    let xmlString = await req.text();

    // Fix known Mobilox typo
    xmlString = xmlString.replace(
      /<ideRntification\.vehiclenr_hexon>/g,
      "<identification.vehiclenr_hexon>"
    );

    // 2. Parse XML
    const parsed = await parseStringPromise(xmlString, { explicitArray: false });

    // Mobilox root is <vehicle>, attributes are under .$ 
    const xml = parsed?.vehicle;
    const action = xml?.$?.action;

    if (!xml || !action) {
      return new NextResponse("Geen geldige XML ontvangen", { status: 400 });
    }

    // 3. Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db(); // default DB from URI
    const voertuigen = db.collection("voertuigen");

    // Identification
    const hexon_nr = xml["identification.vehiclenr_hexon"];
    const license_plate = xml["identification.license_plate"] || "";

    // General info
    const category = xml["general.category"];
    const merk = xml["general.make.name"];
    const model = xml["general.model.name"];
    const title_nl = xml["general.title_nl"];
    const remarks_nl = xml["general.remarks_nl"];
    const type_name = xml["general.type.name"];
    const body_style = xml["general.bodystyle.name"];
    const door_count = xml["body.door_count"];
    const color = xml["body.colour.primary"];
    const paint_type = xml["body.colour.paint_type"];
    const cylinder_count = xml["powertrain.engine.cylinder_count"];
    const displacement = xml["powertrain.engine.displacement"];
    const seat_count = xml["interior.seat_count"];
    const color_name = xml["body.colour.name_nl"];
    const deliverypackages = xml["deliverypackages"];
    const short_desc = deliverypackages?.deliverypackage?.description;
    // Specs
    const topSpeed = xml["powertrain.topspeed"];
    const odometerObject = xml["condition.odometer.reading"];
    let odometerReading = '';

    if (odometerObject?._ && odometerObject?.$?.unit) {
      const value = odometerObject._;
      const unit = odometerObject.$.unit;
      odometerReading = {'value':value,'unit':unit};
    }

    const buildYear = xml["region_specific.nl.build_year"];

    // Pricing (consumer)
    const consumerPricing = xml["sales_conditions.pricing.consumer"];
    const priceObj = consumerPricing?.prices?.price;
    const priceAmount = priceObj?.amount;
    const priceCurrency = priceObj?.currency;
    const priceCountry = consumerPricing?.prices?.$?.country;

    //Images
    const imgs = Array.isArray(xml.images.image) ? xml.images.image : [xml.images.image];
    const localPaths = [];
    for (const img of imgs) {
      const localPath = await downloadImage(img.url, img.filename);
      localPaths.push(localPath);
    }

    // Document to save
    const vehicleDoc = {
      hexon_nr,
      license_plate,
      merk,
      model,
      title_nl,
      category,
      remarks_nl,

      type_name,
      odometerReading,
      topSpeed,
      buildYear,
      pricing: {
        country: priceCountry,
        amount: priceAmount,
        currency: priceCurrency,
      },
      images: localPaths,
      body_style,
      door_count,
      color,
      color_name,
      paint_type,
      cylinder_count,
      displacement,
      seat_count,
      short_desc,
      // raw: xml, // keep full parsed XML
    };


    switch (action.toLowerCase()) {
      case "add":
        await voertuigen.insertOne(vehicleDoc);
        break;

      case "change":
        await voertuigen.updateOne(
          { hexon_nr },
          { $set: vehicleDoc },
          { upsert: true }
        );
        break;

      case "delete":
        await voertuigen.deleteOne({ hexon_nr });
        break;

      default:
        await client.close();
        return new NextResponse("Onbekende actie", { status: 400 });
    }

    await client.close();

    // 4. Mobilox expects "1" on success
    return new NextResponse("1", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err) {
    console.error("Mobilox API error:", err);
    return new NextResponse("Error processing request " + err.message, { status: 500 });
  }
}

export async function GET(request) {
  const client = await MongoClient.connect(uri);
  const db = client.db(); // default DB from URI
  const voertuigen = db.collection("voertuigen");

  return new Response(
    JSON.stringify({ message: "Hello from Mobilox API endpoint test" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
