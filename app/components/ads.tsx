'use client';

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const Ads = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/assets/promo1.png"
            alt="Logo"
            width={70}
            height={50}
            className="w-full h-full rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/assets/promo1.png"
            alt="Logo"
            width={70}
            height={50}
            className="w-full h-full rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/assets/promo1.png"
            alt="Logo"
            width={70}
            height={50}
            className="w-full h-full rounded-lg"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Ads;
