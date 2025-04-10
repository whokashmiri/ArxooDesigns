// Make sure to point at the real image file in your assets folder:
import top from "../assets/top.avif"; 

export default function Hero() {
  return (
    <section
      className="relative  w-full h-screen bg-cover"
      // wrap the imported path in url(...)
      style={{ backgroundImage: `url(${top})` }}
    >
      {/* Overlay to dim the background */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Headline */}
        <h1 className=" font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-tight">
          Crafting Vision with<br/>Precision Building
        </h1>

        {/* Sub‑headline */}
        <p className="mt-6 max-w-2xl text-white font-sans font-normal text-base sm:text-lg">
          Transforming Spaces with Thoughtful Design, Impeccable Attention to Detail, and Timeless Elegance.
        </p>

        {/* Call‑to‑Action */}
        <a
          href="#get-started"
          className="mt-10 inline-block px-10 py-4 bg-white text-black hover:bg-black hover:text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 "
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
