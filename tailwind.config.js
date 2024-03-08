/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'disney-login': "url('https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/C9E09EB127322DE16A41800B80B9F1DF134E31F3C81C1F2DD34DE33690CA67F8/scale?format=webp&quality=90')"
      }
    },
  },
  plugins: [
    import('preline/plugin'),
  ],
}

