import React, { useEffect, useState, useRef } from "react";
import { fetchTrendingMovies } from "../api/omdb";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Features = () => {
  const [movies, setMovies] = useState([]);
  const timer = useRef();

  // Keen Slider setup
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 20 },
      },
    },
    created: () => {
      startAutoSlide();
    },
    destroyed: () => {
      clearInterval(timer.current);
    },
  });

  // Autoplay function
  const startAutoSlide = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 9000); // every 3s
  };

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    loadMovies();

    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="bg-black text-white py-12 px-6 md:px-30">
      <h2 className="text-xl font-bold mb-4 text-start md:text-3xl">Trending Now</h2>

      {/* Carousel Container */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {movies.map((movie, index) => (
            <div key={index} className="keen-slider__slide relative w-40">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="rounded-lg mb-2 w-full h-60 object-cover"
              />
              <p className="text-sm font-semibold truncate">{movie.Title}</p>
              <div className="absolute bottom-8 left-4 md:right-4 text-6xl font-bold text-white stroke-20 stroke-black z-1000">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
<button
  onClick={() => slider.current?.prev()}
  className="absolute top-1/2 left-2 transform -translate-y-1/2  bg-opacity-20 hover:bg-opacity-40 text-white text-4xl font-bold  rounded-full shadow-lg z-10 transition duration-300"
>
  &#10094; {/* Unicode for ◀ */}
</button>

{/* Right Arrow */}
<button
  onClick={() => slider.current?.next()}
  className="absolute top-1/2 right-1 transform -translate-y-1/2  bg-opacity-20 hover:bg-opacity-40 text-white text-4xl font-bold -p-10 rounded-full shadow-lg z-10 transition duration-300"
>
  &#10095; {/* Unicode for ▶ */}
</button>
      </div>

      {/* More Reasons Section (unchanged) */}
      <section className="py-16 px-6 md:px-34 bg-black text-white">
        <h2 className="text-xl md:text-3xl font-bold mb-8 text-start">
          More Reasons to Join
        </h2>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-full">
          ...Cards Here...
          
        </div> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full">
  {/* Card 1 */}
  <div className="bg-gradient-to-br from-purple-900 to-indigo-800 p-4 rounded-2xl shadow-lg flex flex-col justify-between min-h-[300px] max-h-[400px] relative">
    <div>
      <h3 className="text-xl font-bold mb-3">Enjoy on your TV</h3>
      <p className="text-gray-200 text-lg">
        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
      </p>
    </div>
    <div className="absolute bottom-4 right-4 text-3xl">📺</div>
  </div>

{/* Card 2 */}
<div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-2xl shadow-lg flex flex-col justify-start items-start min-h-[300px] relative text-start px-4">
  <div>
    <h3 className="text-xl font-bold mt-3">Download your shows to watch offline</h3>
    <p className="text-gray-200 text-lg mt-3">
      Save your favorites easily and always have something to watch.
    </p>
  </div>
  <div className="absolute bottom-4 right-4 text-3xl">⬇️</div>
</div>


  {/* Card 3 */}
  <div className="bg-gradient-to-br from-purple-900 to-indigo-800 p-4 rounded-2xl shadow-lg flex flex-col justify-between min-h-[300px] relative">
    <div>
      <h3 className="text-xl font-bold mb-3">Watch everywhere</h3>
      <p className="text-gray-200 text-lg">
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
      </p>
    </div>
    <div className="absolute bottom-4 right-4 text-3xl">📱</div>
  </div>

  {/* Card 4 */}
  <div className="bg-gradient-to-br from-purple-900 to-indigo-800 p-4 rounded-2xl shadow-lg flex flex-col justify-between min-h-[300px] relative">
    <div>
      <h3 className="text-xl font-bold mb-3">Create profiles for kids</h3>
      <p className="text-gray-200 text-lg">
        Send kids on adventures with their favorite characters in a space made just for them — free with your membership.
      </p>
    </div>
    <div className="absolute bottom-4 right-4 text-3xl">👧🧒</div>
  </div>
</div>

      </section>
    </section>
  );
};

export default Features;
