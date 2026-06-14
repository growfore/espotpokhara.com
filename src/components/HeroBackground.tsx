"use client";

import { Shader, SimplexNoise, FlowingGradient } from "shaders/react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.08)]">
      <Shader className="w-full h-full" colorSpace="srgb">
        <FlowingGradient
          colorA="#ffffff"
          colorB="#f5f0fa"
          colorC="#eee6f5"
          colorD="#e6daf2"
          speed={0.7}
          distortion={0.3}
        />
        <SimplexNoise
          colorA="#ffffff"
          colorB="#d8cce8"
          scale={3}
          blendMode="multiply"
          opacity={0.12}
        />
      </Shader>
    </div>
  );
}
