import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[28rem] grid-cols-8 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name?: string; // Optional
  className?: string;
  background: ReactNode;
  Icon?: any; // Optional
  description?: string; // Optional
  href?: string; // Optional
  cta?: string; // Optional
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",

      // dark styles
      "transform-gpu bg-black  [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* Conditionally Render Icon */}
      {Icon && (
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      )}
      {/* Conditionally Render Name */}
      {name && (
        <h3 className="text-2xl font-bold text-[#d0c1ae] font-neuePlak scale-y-[0.9]">
          {name}
        </h3>
      )}
      {/* Conditionally Render Description */}
      {description && <p className="max-w-lg text-neutral-400">{description}</p>}
    </div>

    {/* Conditionally Render Button */}
   {/* Button */}
   {href && cta && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button variant="secondary" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
