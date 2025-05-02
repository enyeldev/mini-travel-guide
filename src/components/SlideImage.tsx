import { useEffect, useState } from "react";

const imageArray = [
  "cesar-background",
  "cj-background",
  "grove-background",
  "woman-background",
];

export const SlideImage = () => {
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndexImage((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 6000); // después de 9s, cambia imagen

    // return () => {
    //   clearTimeout(changeImageTimeout);
    // };
  }, [indexImage]);

  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <img
        src={`${imageArray[indexImage]}.jpg`}
        alt=""
        className={`size-9/12 object-cover animate-fade animate-infinite animate-duration-[3000ms] animate-ease-in animate-alternate`}
      />
    </div>
  );
};
