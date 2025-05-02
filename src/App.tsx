import { ChevronLeft, ChevronRight, InfoIcon } from "lucide-react";

import { FullScreenVideo } from "./components/FullScreenVideo";
import { dataMustSeePlaces } from "@/data/data-must-see-places";
import { MustSeePlaceItem } from "./components/MustSeePlaceItem";
import { SlideCarouselImages } from "./components/SlideCarouselImages";
import { useState } from "react";
import { Button } from "./components/ui/button";

const viewImages = ["view1.webp", "view2.webp", "view3.webp"];

const gangsImages = [
  "gangs1.avif",
  "gangs2.webp",
  "gangs3.avif",
  "gangs4.webp",
];
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < gangsImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(gangsImages.length - 1);
    }
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-svh flex flex-col justify-center items-center text-white bg-neutral-950 z-30 lg:hidden
      "
      >
        This Web just can viewed in Desktop!
        <img src="/memoji.png" alt="" />
      </div>

      <main className="bg-neutral-950 w-full h-full relative hidden lg:block">
        <div className="w-screen h-screen flex justify-center items-center text-white">
          {/* <SlideImage /> */}
          <FullScreenVideo
            videoSrc="/video-hero.mp4"
            autoPlay={true}
            loop={true}
            description=""
            muted={false}
            posterSrc=""
            overlay={true}
            overlayOpacity={50}
            title=""
          />
        </div>

        <div className="py-18 px-4 flex flex-col gap-8">
          <div className="">
            <h1 className="text-white font-bold text-5xl">
              Welcome to Los Santos
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SlideCarouselImages viewImages={viewImages} />

            <div className="">
              <div className="mb-4">
                <h2 className="text-white font-bold text-2xl flex items-center gap-2">
                  <InfoIcon className="size-6 text-white" />
                  City Information
                </h2>
              </div>
              <div className="border border-neutral-700 rounded-md text-white p-4 flex flex-col gap-4">
                <div className="">
                  <label className="font-bold">
                    <span>📍</span> Location:
                  </label>
                  <p>
                    Los Santos is a vibrant city located in the southern region
                    of the fictional state of San Andreas, inspired by Los
                    Angeles, California.
                  </p>
                </div>

                <div className="">
                  <label className="font-bold">
                    <span>🌟</span> Why is it special?
                  </label>
                  <p>
                    This is not just a city—it’s a living world. Los Santos has
                    rich neighborhoods, dangerous alleys, sunny beaches,
                    mountain roads, and bustling downtown life. It’s a mix of
                    glamour and street culture.
                  </p>
                </div>

                <div className="">
                  <label className="font-bold">
                    <span>🧠</span> Quick Facts:
                  </label>
                  <div className="">
                    <ol className="flex flex-col gap-2">
                      <li>
                        <p>
                          <span className="font-bold">☀️ Climate:</span> Mostly
                          sunny and dry. Great for walking or driving!
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="font-bold">👥 Population: </span>{" "}
                          Millions, with different cultures, gangs, and social
                          classes.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="font-bold">🚗 Transportation:</span>{" "}
                          Taxis, trains, bikes, and cars everywhere.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="font-bold">🎵 Culture:</span>{" "}
                          Influenced by hip-hop, street art, and Hollywood-style
                          fame.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-18 px-4 flex flex-col gap-8">
          <div className="">
            <h1 className="text-white font-bold text-5xl">
              Must-See Places in Los Santos
            </h1>
          </div>

          <div className="w-full h-full grid grid-cols-10 grid-flow-dense gap-6">
            {dataMustSeePlaces.map((e, i) => (
              <MustSeePlaceItem dataPlace={e} key={i} />
            ))}
          </div>
        </div>

        <div className="py-18 px-4 flex gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="text-white font-bold text-5xl">
                  Top 10 Things To Do in Los Santos
                </h1>
              </div>

              <ol className="text-white flex flex-col gap-2 text-xl">
                <li>
                  🎮 Follow CJ’s story and visit key places from the game.
                </li>
                <li>🛍️ Go shopping at the Downtown Mall or street markets.</li>
                <li>
                  🍔 Eat fast food at Cluckin’ Bell, Burger Shot, or Well
                  Stacked Pizza.
                </li>
                <li>
                  🏄 Swim or chill at the beach and rent a jet ski (if modded!).
                </li>
                <li>🧗 Climb to Mount Chiliad for the best sunrise views.</li>
                <li>🚲 Ride a BMX around Ganton and perform stunts.</li>
                <li>🧼 Get a new haircut or a tattoo in Idlewood.</li>
                <li>📸 Take photos of graffiti and art in East Los Santos.</li>
                <li>🕺 Dance in clubs like the Alhambra near Temple.</li>
                <li>
                  🚕 Take a taxi tour and explore hidden alleys and rich hills.
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-4  h-full">
              <div className="">
                <h1 className="text-white font-bold text-5xl">
                  Be Careful with that N*ggas! 🥷🏾
                </h1>
              </div>

              <div className="w-full h-full ">
                <div className="relative rounded-md overflow-hidden h-full mb-4 group">
                  <div className={` absolute inset-0 `}>
                    <img
                      src={`/${gangsImages[currentIndex]}`}
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
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <h1 className="text-white font-bold text-5xl">
                Map of Key Places in Los Santos
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full h-96 bg-[url(/map3-gangs.jpg)] bg-center bg-cover bg-no-repeat"></div>

              <div className="w-full h-96 bg-[url(/map.jpg)] bg-center bg-cover bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
