import React from 'react'

const Row = ({ title, movies }) => (
  <section className="px-6 py-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex overflow-x-scroll gap-2 scrollbar-hide">
      {movies?.map((m) => (
        <img
          key={m.id}
          src={m.poster}
          alt={m.title}
          className="w-40 rounded hover:scale-105 transition-transform"
        />
      ))}
    </div>
  </section>
);

export default Row