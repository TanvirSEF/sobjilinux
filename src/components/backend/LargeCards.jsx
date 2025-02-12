import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      period: "Today Orders",
      sales: "00",
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: "00",
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: "00",
      color: "bg-orange-600",
    },
    {
      period: "All-Time Sale",
      sales: "00",
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 py-8">
      {orderStats.map((item, i) => {
        return <LargeCard data={item} key={i} />;
      })}
    </div>
  );
}
