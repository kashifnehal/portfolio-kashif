"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioModalBlockerFlag } from "../portfolioModalConfig";

export const PortfolioModalBlocker = () => {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    if (!portfolioModalBlockerFlag) return;
    const scrollY = window.scrollY;
    const { position, top, width, overflowY } = document.body.style;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      document.body.style.overflowY = overflowY;
      window.scrollTo(0, scrollY);
    };
  }, []);

  if (!portfolioModalBlockerFlag) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-black/60 rounded-lg p-4 sm:p-6 md:p-8 w-[60vw] h-[60vh] max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-start">
        <div className="relative w-full h-1/2 sm:h-2/3">
          <Image
            src="/fc2.jpeg"
            alt=""
            fill
            className="object-contain rounded-md"
            priority
          />
        </div>
      
        <p className="mt-3 text-white text-base sm:text-lg md:text-xl text-center">
          How many people do you see in this picture..
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full justify-center">
          <button
            type="button"
            className="px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base rounded-md bg-white text-black font-semibold hover:bg-gray-200 w-full sm:w-auto"
            onClick={() =>
              setResponse(
                'Remember what Tyler said: "we work jobs we hate, to buy things we don\'t need, to impress people we don\'t like"'
              )
            }
          >
            1
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base rounded-md bg-white text-black font-semibold hover:bg-gray-200 w-full sm:w-auto"
            onClick={() => setResponse("Enjoy kid, Life is good")}
          >
            2
          </button>
        </div>
        {response && (
          <p className="mt-4 text-white text-center text-sm sm:text-base md:text-lg">
            {response}
          </p>
        )}
      </div>
    </div>
  );
};

