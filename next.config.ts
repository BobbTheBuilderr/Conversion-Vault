import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // three.js + r3f ship untranspiled ESM in places; transpile to keep the
  // App Router happy across server/client boundaries.
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/postprocessing',
    '@14islands/r3f-scroll-rig',
  ],
}

export default nextConfig
