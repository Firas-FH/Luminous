/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarytxt: 'var(--primary-text-color)',
        secondarytxt: 'var(--secondary-text-color)',
        primarybg: 'var(--primary-bg)',
        secondarybg:'var(--secondary-bg)',
        bordercolor:'var(--border-color)',
        headerscolor:'var(--headers-color)',
        btnbg:'var(--btn-bg)',
        highlightcolor:'var(--highlight-color)',
        alertscolor:'var(--alerts-color)'
      },
    },
  },
  plugins: [],
  darkMode : 'class',
}