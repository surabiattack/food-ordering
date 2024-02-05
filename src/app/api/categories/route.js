import { Category } from "@/models/Category";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });

  return Response.json(categoryDoc);
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const { _id, name } = await req.json();
  await Category.updateOne({ _id }, { name: name });
  return Response.json(true);
}

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(await Category.find());
}
