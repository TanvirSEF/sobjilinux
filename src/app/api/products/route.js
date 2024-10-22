import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const {
      barcode,
      description,
      categoryId,
      imageUrl,
      isActive,
      isWholesale,
      productCode,
      productPrice,
      productSalePrice,
      slug,
      sku,
      tags,
      title,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await request.json();
    const exitingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (exitingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product Already Exists",
        },
        { status: 409 }
      );
    }

    const newProduct = await db.product.create({
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isActive,
        sku,
        barcode,
        productPrice: parseFloat(productPrice),
        productSalePrice: parseFloat(productSalePrice),
        tags,
        isWholesale,
        productCode,
        unit,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Product",
        error,
      },
      { status: 500 }
    );
  }
}
