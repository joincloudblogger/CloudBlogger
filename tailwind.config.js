/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        grafanaBg: "#111111",
        grafanaBlue: "#1976d2",
        grafanaGreen: "#00ff99",
        grafanaOrange: "#ff9800",
        grafanaGray: "#23272f"
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      borderRadius: {
        xl: "1.5rem"
      },
      boxShadow: {
        grafana: "0 4px 32px 0 rgba(25, 118, 210, 0.15)"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out infinite 2s',
      },
    }
  },
  plugins: [],
}

