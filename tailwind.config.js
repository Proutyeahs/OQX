/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      transparent: 'transparent',
      current: 'currentColor',
      'CustomBlue': '#1D68DE',
      'CustomRed': '#F44C1D',
      'CustomYellow': '#F3D73C',
      'CustomPink': '#F3BFCE',
      'CustomCream': '#FCF6ED'
    }
  },
  plugins: [
    require('flowbite/plugin')

  ],
}