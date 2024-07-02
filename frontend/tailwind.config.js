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
        alertscolor:'var(--alerts-color)',

      },
      fontFamily: {
        'lora': 'var(--lora-font)',
        montserratefont:'var(--montserrate-font)',
        opensansfont:'var(--open-sans-font)',
        lorafont:'var(--lora-font)'
      },
      fontSize: {
        'custom-25': '25px',
      },
      transitionProperty: {
        font: 'font-size, font-weight, font-style, font-family',
      },
      zIndex: {
        1000: '1000',
      },
    },
  },
  plugins: [],
  darkMode : 'class',
}