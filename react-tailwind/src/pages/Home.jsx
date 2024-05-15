import React from 'react';

export default function Home() {
    return (
      <div className="flex flex-row flex-wrap">
        {Array.from({ length: 12 }).map((_, index) => (
          <section key={index}>
            <div className="w-48 border border-gray-300 p-2 m-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer">
              <h1 className="text-xl">Headline</h1>
              <h3 className="text-lg">Subheadline</h3>
              <p className="text-xs w-36 h-12 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto libero molestias quidem quas a veritatis incidunt id praesentium quos.
              </p>
            </div>
          </section>
        ))}
      </div>
  );
};
