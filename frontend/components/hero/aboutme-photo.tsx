import { BentoCard, BentoGrid } from "@/components/ui/bentogrid";
import { Skeleton } from "../ui/skeleton";
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
export async function HeroAboutMePhoto() {
    const features = [
        {
            name: "ABOUT ME",
            href: "/",
            cta: "Learn more",
            background: <div className="w-full absolute inset-0  text-[#d0c1ae] p-6 text-[18px] font-subtext leading-relaxed">I’m Aditi Shrestha, a passionate creative who loves capturing moments through photography and exploring other forms of media.</div>, // Blue background
            className: "col-span-3 lg:col-span-2 bg-[#131313]",
        },
        {
            background:
                <div className="absolute inset-0">
                    <Image
                        src="/img/heroPhoto.jpg"
                        alt="Hero Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 scale-x-[-1]"
                    />
                </div>
            ,
            className: "col-span-3 lg:col-span-4",
        },
        {
            name: "WORKS",
            href: "/",
            cta: "Browse Portfolio",
            background:
                <div className="absolute inset-0">
                    <Image
                        src="/img/IMG_1961-1.jpg"
                        alt="Hero Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90 scale-x-[-1]"
                    />
                </div>
            , className: "col-span-3 lg:col-span-2 bg-[#131313]",
        },


        

    ];


    return (

        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>

    );
}