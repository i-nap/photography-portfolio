import AboutMe from "@/components/hero/about-me";
import { HeroAboutMePhoto } from "@/components/hero/aboutme-photo";
import { MyPhotos } from "@/components/hero/my-photos";
import { BentoPhotos } from "@/components/photos/bento-photos";
import { TimelineDemo } from "@/components/timeline/test";
import { TimelineWorks } from "@/components/timeline/timeline";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" mt-[2rem] mx-[6rem]  bg-[#d0c1ae] max-w-full px-6 flex flex-col">
        {/* Stretched Text Container */}
        <div className="flex flex-col flex-grow mb-[3rem]">
          {/* Header */}
          <div className="flex w-full">
            {Array.from("CAPTURING").map((char, index) => (
              <span
                key={index}
                className="text-[9vw] uppercase leading-none text-center grow transform font-headers"
              >
                {char}
              </span>
            ))}
          </div>

          {/* Subheading with words */}
          <div className="flex w-full">
            {"Life’s Most Beautiful Moments Through the Lens of Creativity and Passion"
              .split(" ")
              .map((word, index) => (
                <h1
                  key={index}
                  className="text-[2vw] uppercase leading-none text-center grow transform font-neuePlak font-bold scale-y-[0.9]"
                >
                  {word}
                </h1>
              ))}
          </div>
        </div>

        {/* HeroAboutMePhoto Section */}
        <div className="flex-grow w-full ">
          <HeroAboutMePhoto />
        </div>

        {/* Separator */}
        <Separator className="mt-[3rem] mb-[1rem]" />
        {/* AboutMe Section */}
        <div>
          <AboutMe />

          {/* My Photos */}
          <div className="w-full mt-[2rem] mb-[3rem]">
            <MyPhotos />
          </div>
        </div>

      </div>
      <div className="mx-[6rem] max-w-full px-6  mt-[4rem]">
        <div className="flex w-full">
          {Array.from("MY WORKS").map((char, index) => (
            <span
              key={index}
              className="text-[9vw] uppercase leading-none text-center grow transform font-headers text-customBrown"
            >
              {char}
            </span>
          ))}
        </div>
<TimelineWorks/>
      </div>

      <div className="mx-[6rem]  bg-[#d0c1ae] max-w-full px-6 flex flex-col mt-[4rem]">
        <Separator className="mt-[3rem] mb-[1rem]" />

        <div className="w-full flex justify-around items-center ">
          <span
            className="text-[8vw] uppercase leading-none grow transform font-headers"
          >
            PHOTOS
          </span>
          <Button variant="default">
            <span className="text-[2vw] uppercase leading-none text-center grow transform font-neuePlak font-bold scale-y-[0.9] text-customBrown">
              SHOW ALL
            </span>
            <MoveRight className="text-customBrown" />
          </Button>
        </div>
        <div className="mt-[3rem]">
          <BentoPhotos/>
          </div>
      </div>
    </>

  );
}
