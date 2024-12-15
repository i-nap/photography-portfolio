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
export async function BentoPhotos() {
    const features = [
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
            className: "lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2",
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
            className: "lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-2",
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
            className: "lg:col-start-7 lg:col-end lg:row-start-1 lg:row-end-3",
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