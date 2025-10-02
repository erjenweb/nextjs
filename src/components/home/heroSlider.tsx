'use client';
import Link from "next/link";

function HeroSlider({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="hero-with-banner relative flex overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/image/bannr_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 max-w-7xl mx-auto w-full hero-content">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">BEYOND</span>
            <span className="block text-white">DRIVING</span>
          </h1>
        </div>

        <div className="flex items-center justify-between mt-52">
          <div className="flex items-center">
            {/* First Link */}
            <Link
              href="/aanbod"
              className="px-6 py-2 bg-brand-orange text-white rounded-full cursor-pointer bg-orange-600 transition-colors mr-5"
            >
              Zie onze collectie
            </Link>

            {/* Second Link */}
            <Link
              href="/aanbod"
              className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              Maak een afspraak
            </Link>
          </div>

          <p className="text-gray-300 text-lg">
            Maak elk moment onvergetelijk met Cartelier. Van exotische sportwagens tot executive sedans – geniet van de ultieme rit, ondersteund door premium service en oog voor elk detail.
          </p>
        </div>
      </div>
    </section>
  );
}

export { HeroSlider };
