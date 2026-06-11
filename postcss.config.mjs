// Tailwind CSS v4 uses a dedicated PostCSS plugin (no tailwind.config required
// for the engine itself — tokens live in globals.css via @theme).
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
