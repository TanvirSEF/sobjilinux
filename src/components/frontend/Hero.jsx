
import React from "react";
import vegetable from "../../assets/images/potato.png";
import Link from "next/link";
import Image from "next/image";
import NukaCarousel from "@/components/frontend/NukaCarousel";
export default function Hero() {
  const categories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="flex gap-8">
      <div className="w-1/3 h-[500px] bg-white border border-gray-300 rounded-lg dark:bg-slate-700 overflow-hidden shadow dark:border-gray-700 text-slate-800">
        <h2 className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:border-gray-600 dark:text-slate-100 py-3 px-6 font-semibold text-[17px] border-b border-gray-300">
          Shop By Category
        </h2>
        <div className="py-3 px-6  h-[400px] overflow-y-auto flex flex-col gap-3">
          {categories.map((item, i) => {
            return (
              <Link
                key={i}
                href=""
                className="flex items-center gap-3 hover:bg-slate-100 rounded-lg duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
              >
                <Image
                  width={473}
                  height={477}
                  className="w-12 h-12 rounded-full object-cover border border-green-300"
                  src={vegetable}
                  alt="vegetables"
                />
                <span className="font-semibold">Vegetables</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Sidebar */}
      {/* Banner */}
      <div className="w-2/3 rounded-md">
        <NukaCarousel />
      </div>
    </div>
  );
}
