import type { GetImageResult } from "astro";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export type ShowcaseItem = {
    title: string;
    category: string;
    image: GetImageResult;
};

interface ShowcaseCarouselProps {
    items: ShowcaseItem[];
}
export default function ShowcaseCarousel({
    items,
}: Readonly<ShowcaseCarouselProps>) {
    return (
        <Carousel className="w-3/4 sm:w-full sm:max-w-md lg:w-[92.5%] lg:max-w-screen-xl">
            <CarouselContent className="-ml-8 xl:-ml-12 2xl:-ml-16">
                {items.map(({ title, category, image }) => (
                    <CarouselItem
                        key={category}
                        className="pl-8 lg:basis-1/3 xl:pl-12 2xl:pl-16"
                    >
                        <a
                            href="#"
                            className="relative flex aspect-[9/16] select-none flex-col gap-y-2 rounded-3xl p-8"
                        >
                            <span className="text-sm font-medium md:text-base">
                                {category}
                            </span>

                            <h5 className="text-balance text-xl font-semibold md:text-3xl">
                                {title}
                            </h5>

                            <img
                                alt={category}
                                src={image.src}
                                className="absolute inset-0 -z-10 m-auto size-full rounded-[inherit] object-cover brightness-50"
                            />
                        </a>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
