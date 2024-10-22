import React from "react";
import NewProductForm from "@/components/backend/NewProductForm";
import getData from "@/lib/getData";

export default async function NewProduct() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((item) => {
    return {
      id: item.id,
      title: item.title,
    };
  });
  return <NewProductForm categories={categories} />;
}
