module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(225 24% 7%)",
        foreground: "hsl(210 40% 96%)",
        panel: "hsl(225 20% 10%)",
        border: "hsl(220 14% 22%)",
        muted: "hsl(218 12% 64%)",
        accent: "hsl(176 75% 55%)",
        danger: "hsl(0 82% 62%)",
        warning: "hsl(42 92% 58%)",
        success: "hsl(145 70% 52%)"
      },
      boxShadow: {
        glow: "0 0 42px rgb(45 212 191 / 0.14)",
        danger: "0 0 28px rgb(248 113 113 / 0.22)",
        success: "0 0 28px rgb(74 222 128 / 0.18)"
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
