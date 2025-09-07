'use client'
import { useState } from "react";

export default function SectionVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-10 mb-10">
      <div className="flex justify-center items-center flex-col text-center sm:px-10 px-5 max-w-[1000px] m-auto">
        {/* <h1 className="mb-5 sm:text-[32px] text-[24px] font-semibold text-wrap lg:text-nowrap">
          Quer saber se o TegPro é pra você? Assista ao vídeo abaixo.
        </h1> */}

        <figure
          className="w-full max-w-[800px] aspect-video relative rounded-2xl overflow-hidden shadow-[0_8px_24px_hsl(210_100%_45%/0.6)] cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          {showVideo ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              // src="https://www.youtube.com/embed/hfJMWlZ0GhY?autoplay=1"
              title="Instituto Sorriso"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              {/* Thumbnail */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover brightness-90 saturate-125 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_hsl(210_100%_45%/0.8)] hover:brightness-100 hover:saturate-150"
                style={{
                  backgroundImage:
                    "url('/hero-dental.jpg')",
                }}
              />

              {/* Botão Play customizado (#C9A050) */}
              <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-[linear-gradient(135deg,hsl(210_100%_45%)_0%,hsl(200_100%_50%)_100%)]">
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "15px solid transparent",
                      borderBottom: "15px solid transparent",
                      borderLeft: "25px solid white",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </figure>
      </div>
    </section>
  );
}
