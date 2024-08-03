'use client'
import { useRef } from "react";
import Image from "next/image";
import classes from "../Promo.module.css";

import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function PromoBanner() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel 
      withIndicators 
      height={410} 
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={classes}
    >
      <Carousel.Slide>
        <Image src="/Images/Promotion/1.jpg" layout="fill" objectFit="cover" alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="/Images/Promotion/2.jpg" layout="fill" objectFit="cover" alt="" />
      </Carousel.Slide>
    </Carousel>
  );
}
