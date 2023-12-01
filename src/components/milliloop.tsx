'use client';

import React, { useState, useEffect } from 'react';

export default function Milliloop() {
  const [currentMillisec, setCurrentMillisec] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMillisec((prevMillisec) => prevMillisec + 1);
    }, currentMillisec + 1);

    return () => clearInterval(intervalId);
  }, [currentMillisec]);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-[#000000] inline-block" style={{ minWidth: '150px' }}>
                milli-loop
              </span>{' '}
              <br />
              <span className="text-[#bd1e59] inline-block">
                {currentMillisec.toLocaleString()}
              </span>
            </h1>
            <h3 className="text-lg text-[#000000]">
                Increase the millisecond counter by 1 every millisecond.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
