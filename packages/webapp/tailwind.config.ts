import type { Config } from 'tailwindcss'

/** using node_modules here works but the HMR does not work for adding new classes */
export default <Config> {
  content: [
    // './node_modules/@lautr/initium-nuxt-design/**/*.vue',
    './../design/components/**/*.vue',
  ],
}