import React from 'react';

export default function Merch() {
  return (
    <div className="relative h-screen w-full bg-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
        <h1 className="text-5xl font-extrabold mb-6">Merch Coming Soon!</h1>
        <p className="text-xl text-red-400 mb-8">We're working hard on something special. Stay tuned!</p>
      </div>
    </div>
  );
}