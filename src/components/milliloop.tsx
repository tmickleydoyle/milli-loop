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
    <>
      {currentMillisec.toLocaleString()}
    </>
  );
}
