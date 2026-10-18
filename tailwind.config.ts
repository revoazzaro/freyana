import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        obsidian: '#0B0C0E',
        onyx: '#16181B',
        parchment: '#F4F1EA',
        brass: '#C8A261',
        terracotta: '#9E4733'
      }
    }
  }
}