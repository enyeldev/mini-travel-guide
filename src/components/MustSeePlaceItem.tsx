import { Place } from "@/types";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";

type MustSeePlaceItemProps = {
  dataPlace: Place;
};

export const MustSeePlaceItem = ({ dataPlace }: MustSeePlaceItemProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < dataPlace.modalInfo.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(dataPlace.modalInfo.images.length - 1);
    }
  };

  return (
    <>
      <div
        className={`hover:scale-105 transition-all duration-200 group h-72 ${dataPlace.colSpan} rounded-md shadow-md relative `}
      >
        <img
          src={`/${dataPlace.mainImage}`}
          alt=""
          className="size-full rounded-md"
        />
        <div
          className="bg-neutral-950 size-10 rounded-full flex justify-center items-center absolute top-4 right-4 cursor-pointer z-10"
          onClick={() => setOpen(true)}
        >
          <Plus className="size-5 text-white" />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex items-end absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black">
          <div className="mb-4">
            <h3 className="text-white font-bold text-3xl">{dataPlace.name}</h3>
            <p className="text-gray-300 text-sm">{dataPlace.shortAddress}</p>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-900 text-white border border-neutral-700 rounded-md">
          <div className="rounded-md h-72">
            {/* Representative Image */}
            <div className="relative rounded-xl overflow-hidden h-full mb-4 group">
              <img
                src={`/${dataPlace.modalInfo.images[currentIndex]}`}
                className="size-full rounded-md"
              />

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
          <DialogTitle>{dataPlace.name}</DialogTitle>
          <DialogDescription>
            {dataPlace.modalInfo.shortDescription}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};
