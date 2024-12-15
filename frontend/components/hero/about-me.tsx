import { FocusCards } from "../ui/focus-cards";
import { MyPhotos } from "./my-photos";

export default function AboutMe() {
    return (
        <div className="flex w-full justify-between">
            {/* Header Section */}
            <div className="text-[2vw] uppercase font-neuePlak font-bold scale-y-[0.9] leading-none">
                <h1 className="m-0 p-0">ABOUT ME</h1>
            </div>

            {/* About Me Description */}
            <div className="w-[50vw] mt-2">
            <span className="text-[22px] font-subtext  leading-relaxed tracking-wide">

            Hi, I'm Aditi Shrestha, a Media student at Kathmandu University, KUSOA, driven by a passion for creativity ✨ and storytelling. Photography 📸 is more than just a hobby for me—it's a way to capture emotions, preserve memories, and express my unique perspective of the world. Inspired by the beauty in everyday moments, I enjoy experimenting with light, composition, and angles to bring my visions to life.  </span>
            </div>

        </div>
        
    );
}
