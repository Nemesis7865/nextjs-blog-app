import { NextResponse } from "next/server";
import { ConnectDB } from "@/lb/config/config";
import Blog from "@/lb/models/blogmodel";
import { writeFile } from "fs/promises";

const LoadDb = async () => {
  await ConnectDB();
};

LoadDb();

export const GET = (request) => {
  try {
    return NextResponse.json({ msg: "api is working" });
  } catch (err) {
    return NextResponse.json({ err: "An error occured" });
  }
};

export const POST = async (request) => {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    console.log(imgUrl);
    return NextResponse.json({ imgUrl });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: "An error occured" });
  }
};
