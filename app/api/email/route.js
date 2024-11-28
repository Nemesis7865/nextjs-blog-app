import { ConnectDB } from "@/lb/config/db";
import Email from "@/lb/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDb = async () => {
  await ConnectDB();
};

LoadDb();

export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await Email.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}

export async function GET(request) {
  const emails = await Email.find({});
  return NextResponse.json({ emails });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await Email.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email Deleted" });
}
