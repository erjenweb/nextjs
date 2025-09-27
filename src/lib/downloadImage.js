import fs from "fs";
import path from "path";

async function downloadImage(url, filename) {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());

  const filePath = path.join(process.cwd(), "public", "uploads", filename);
  fs.writeFileSync(filePath, buffer);

  return `/uploads/${filename}`; // relative path for frontend
}

export default downloadImage;
