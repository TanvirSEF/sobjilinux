"use client";
import { Carousel } from "nuka-carousel";
import React from "react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import Image from "next/image";

export default function NukaCarousel() {
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={3000}
      showArrows
    >
      <Image src={banner1} alt="" />
      <Image src={banner2} alt="" />
      <Image src={banner3} alt="" />
      <Image src={banner4} alt="" />
    </Carousel>
  );
}
