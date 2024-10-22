import React from "react";
import { Download, Search, Trash } from "lucide-react";

export default function TableAction() {
  return (
    <div className="flex justify-between py-6 px-12 bg-slate-700 rounded-lg items-center gap-8">
      <button className="relative inline-flex items-center justify-center py-3 px-4 space-x-3 text-base font-medium text-gray-900 rounded-lg group bg-slate-800  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border border-blue-700 hover:bg-blue-800">
        <Download />
        <span>Export</span>
      </button>

      <div className=" flex-grow ">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
            placeholder="Search for items"
          />
        </div>
      </div>

      <button className="flex items-center space-x-2 bg-red-600 text-white rounded-lg px-6 py-3 ">
        <Trash />
        <span>Bulk Delete</span>
      </button>
    </div>
  );
}