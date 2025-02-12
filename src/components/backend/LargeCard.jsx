import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ data }) {
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}
    >
      <Layers />
      <h3>{data.period}</h3>
      <h4 className="lg:text-3xl text-2xl">BDT {data.sales}</h4>
    </div>
  );
}
