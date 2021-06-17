import React from "react";
import Image from "next/image";
import RubberBand from "react-reveal/RubberBand";

function Banner() {
  return (
    <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto h-full py-10 bg-white">
      <div className="max-w-lg flex-col">
        <RubberBand bottom>
          <div className="text-blue-light font-extrabold text-7xl leading-snug">
            {//Shopping to stay happy
             }

             <h2 className="text-6xl">Stay Home</h2> 
             <h1>Shop Online.</h1>
          </div>  
          <p className="mt-6 mb-12 max-w-md font-medium">
            Shop online from a wide range of genuine products whenever you want
            24x7.
          </p>
          <button className="button px-10 py-2 text-xl">Shop Now</button>
          </RubberBand>
      </div>
      <div>
        <Image
          src="/img/hero.svg"
          alt="Web Shopping"
          width={600}
          height={600}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Banner;
