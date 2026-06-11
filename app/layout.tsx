import type { Metadata, Viewport } from 'next'
import './globals.css'

/* ----------------------------------------------------------------------------
   FONTS — placeholder wiring.
   SWAP THESE: replace the two CSS variables with real next/font faces, e.g.
     import localFont from 'next/font/local'
     const display = localFont({ src: '...', variable: '--font-display-face' })
   then add display.variable + sans.variable to <html className>.
   For now we expose empty vars so globals.css falls back to system stacks
   without throwing — see --font-display / --font-sans in globals.css.
---------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'A Frame Ahead — Immersive Web Design & 3D Storytelling',
  description:
    'A Frame Ahead is a creative digital agency crafting immersive web design, 3D storytelling, and brand experiences. Free website build — pay only for your monthly marketing plan.',
  metadataBase: new URL('https://aframeahead.com'),
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
