"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);


  if (!showLoader) return null;


  return (

    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-extrabold text-yellow-400 animate-pulse">
          Ad Bazaar
        </h1>


        <p className="text-white mt-5 text-lg tracking-[4px]">
          PRINTING • BRANDING • DESIGNING
        </p>


        <div className="mt-8">

          <div className="w-52 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">

            <div className="h-full bg-yellow-400 animate-pulse w-full"></div>

          </div>

        </div>


      </div>

    </div>

  );
}