import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideCarouselImagesProps = {
  viewImages: string[];
};

export const SlideCarouselImages = ({
  viewImages,
}: SlideCarouselImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < viewImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(viewImages.length - 1);
    }
  };

  return (
    <div className="lg:col-span-2 border border-neutral-700 rounded-md">
      {/* Representative Image */}
      <div className="relative rounded-md overflow-hidden h-full mb-4 group">
        <div
          className={` absolute inset-0 bg-[url(/${viewImages[currentIndex]})] bg-cover bg-center bg-no-repeat`}
        >
          <img
            src={`/${viewImages[currentIndex]}`}
            alt=""
            className="w-full h-full"
          />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-3xl font-bold text-white">
                  Nombre de la ciudad
                </h2>
                <div className="flex items-center text-gray-200 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Ubicacion de la ciudad</span>
                </div>
              </div> */}

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>

        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-1"></div>
      </div>
    </div>
  );
};
