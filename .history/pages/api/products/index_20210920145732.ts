import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../models/product";
import { getDB } from "\Users\olago_000\Desktop\starter\code_academy_next_app\pages\db";

export const products = Array(100)
  .fill(0)
  .map((_, i) => {
    const idx = i + 1;
    return {
      id: idx,
      name: `Product ${idx}`,
      cost: ((i % 5) + 5) * 12,
      category: (i % 10) + 1,
      image: i % 4,
    };
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  res.status(200).json(products);
}

const { db } = getDB(

);

const result = await db.query(<"SELECT * FROM customer LIMIT 1">);

console.log(result);
