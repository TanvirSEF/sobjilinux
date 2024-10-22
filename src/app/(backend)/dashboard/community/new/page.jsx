import React from "react";
import NewCommunityForm from "@/components/backend/NewCommunityForm";
import getData from "@/lib/getData";

export default async function NewCommunity() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((item) => {
    return {
      id: item.id,
      title: item.title,
    };
  });
  return <NewCommunityForm categories={categories} />;
}
