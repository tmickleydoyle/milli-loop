'use client';

import Milliloop from './milliloop';

export default function MilliloopChart() {

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-[#000000] inline-block" style={{ minWidth: '150px' }}>
                milli-loop
              </span>
            </h1>
            <div className="w-full h-full flex items-center justify-center">
              <div
                className={`w-64 h-32 bg-[#bd1e59] rounded-lg flex items-center justify-center text-white text-4xl font-bold`}
              >
                <Milliloop />
              </div>
            </div>
            <h3 className="text-lg text-[#000000]">Increment the time interval between counts by 1 millisecond.</h3>
          </div>
        <div className="flex items-center justify-center text-center space-y-4">
            <a
                className="text-lg text-[#919191] hover:text-[#bd1e59]"
                href="https://github.com/tmickleydoyle/milli-loop"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub Repo
            </a>
        </div>
        </div>
      </section>
    </div>
  );
}
