import React from "react";
import SearchForm from "@/components/frontend/SearchForm";
import HelpModal from "@/components/frontend/HelpModal";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logos.png";
import ThemeSwitcherBtn from "@/components/ThemeSwitcher";
import { HelpCircle, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-gray-50 dark:bg-slate-700 shadow static w-full">
      <div className="flex items-center justify-between py-3 container mx-auto">
        <Link className="w-[20%]" href="/">
          <Image src={logo} alt="sobjibari logo" className="w-24" />
        </Link>
        <div className="w-[50%]">
          <SearchForm />
        </div>
        <div className="w-[30%] flex gap-4">
          <Link
            href="/login"
            className="flex items-center space-x-1 px-[10px] py-1 bg-green-700 hover:bg-green-900 duration-200 rounded-lg text-[14px]"
          >
            <User className="text-white w-5" />
            <span className="text-white font-semibold">Login/Sign Up</span>
          </Link>

          <HelpModal />
          <Link
            href="/cart"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
          >
            <ShoppingCart className="text-green-700 dark:text-lime-500" />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </Link>
          <ThemeSwitcherBtn />
        </div>
      </div>
    </div>
  );
}
