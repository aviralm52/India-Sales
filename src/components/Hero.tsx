import { ShoppingBag } from "lucide-react";

import { Button } from "./ui/button";
import { useState } from "react";

const Hero = () => {
  const [fadedImage, setFadedImage] = useState(false);

  return (
    <div>
      <video
        src="/videos/horse-video-2.mp4"
        autoPlay
        muted
        loop
        className={`absolute opacity-100 top-0 h-screen object-fill -z-10 invisible md:visible ${
          fadedImage && "opacity-70"
        }`}
      ></video>

      <img
        src="/images/horse-img.jpg"
        alt="bg-image"
        className=" w-screen h-screen md:invisible"
      />

      <Button
        variant={"secondary"}
        className=" absolute bottom-36 left-1/2 -translate-x-1/2 py-6 px-8 rounded-3xl"
        onMouseEnter={() => setFadedImage(true)}
        onMouseLeave={() => setFadedImage(false)}
      >
        Products <ShoppingBag />{" "}
      </Button>
    </div>
  );
};
export default Hero;
