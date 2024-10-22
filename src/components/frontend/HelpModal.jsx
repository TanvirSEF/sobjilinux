"use client";

import { Button, Modal } from "flowbite-react";
import {
  CornerDownLeft,
  Headset,
  HelpCircle,
  MessageSquare,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        href=""
        className="flex items-center space-x-1 px-[9px] py-[6px] bg-green-700 hover:bg-green-900 duration-200 rounded-lg text-[14px]"
      >
        <HelpCircle className="text-white w-5" />
        <span className="text-white font-semibold">Help</span>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          Need Help With Buying, Talk to Our Customer Service
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-6">
            <Link
              href="tel:01305168181"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-green-100 justify-center rounded-full">
                <Headset className="w-6 h-6 text-green-800" />
              </div>
              <span className="font-semibold text-[18px]">
                Call : 01305168181
              </span>
            </Link>
            <Link
              href="/track"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-green-100 justify-center rounded-full">
                <Truck className="w-6 h-6 text-green-800" />
              </div>
              <span className="font-semibold text-[18px]">
                Track Your Order
              </span>
            </Link>
            <Link
              href=""
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-green-100 justify-center rounded-full">
                <CornerDownLeft className="w-6 h-6 text-green-800" />
              </div>
              <span className="font-semibold text-[18px]">Return & Refund</span>
            </Link>
            <Link
              href=""
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-green-100 justify-center rounded-full">
                <MessageSquare className="w-6 h-6 text-green-800" />
              </div>
              <span className="font-semibold text-[18px]">Chat With Us</span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
