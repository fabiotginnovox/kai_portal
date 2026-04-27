/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kai: {
          forest: {
            50: 'var(--kai-forest-50)',
            100: 'var(--kai-forest-100)',
            200: 'var(--kai-forest-200)',
            300: 'var(--kai-forest-300)',
            400: 'var(--kai-forest-400)',
            500: 'var(--kai-forest-500)',
            600: 'var(--kai-forest-600)',
            700: 'var(--kai-forest-700)',
            800: 'var(--kai-forest-800)',
            900: 'var(--kai-forest-900)',
          },
          olive: {
            50: 'var(--kai-olive-50)',
            100: 'var(--kai-olive-100)',
            200: 'var(--kai-olive-200)',
            300: 'var(--kai-olive-300)',
            400: 'var(--kai-olive-400)',
            500: 'var(--kai-olive-500)',
            600: 'var(--kai-olive-600)',
            700: 'var(--kai-olive-700)',
            800: 'var(--kai-olive-800)',
            900: 'var(--kai-olive-900)',
          },
          cream: {
            50: 'var(--kai-cream-50)',
            100: 'var(--kai-cream-100)',
            200: 'var(--kai-cream-200)',
            300: 'var(--kai-cream-300)',
            400: 'var(--kai-cream-400)',
            500: 'var(--kai-cream-500)',
            600: 'var(--kai-cream-600)',
            700: 'var(--kai-cream-700)',
            800: 'var(--kai-cream-800)',
            900: 'var(--kai-cream-900)',
            950: 'var(--kai-cream-950)',
          },
          bg: {
            page: 'var(--bg-page)',
            surface: 'var(--bg-surface)',
            sunken: 'var(--bg-sunken)',
            dark: 'var(--bg-dark)',
            darkDeeper: 'var(--bg-dark-deeper)',
          },
          fg: {
            primary: 'var(--fg-primary)',
            secondary: 'var(--fg-secondary)',
            tertiary: 'var(--fg-tertiary)',
            onDark: 'var(--fg-on-dark)',
            onDarkMuted: 'var(--fg-on-dark-muted)',
          },
          accent: {
            primary: 'var(--accent-primary)',
            hover: 'var(--accent-hover)',
            pressed: 'var(--accent-pressed)',
            muted: 'var(--accent-muted)',
          },
          brand: {
            olive: 'var(--brand-olive)',
            oliveLt: 'var(--brand-olive-lt)',
          },
          border: {
            default: 'var(--border-default)',
            strong: 'var(--border-strong)',
            focus: 'var(--border-focus)',
          },
          /* Legacy mappings for partial compatibility during transition */
          black: '#050a06',
          dark: '#0d1610',
          card: '#131f16',
          pink: '#FF2D9E',
          yellow: '#FFF500',
          green: '#00FF85',
          blue: '#00E0FF',
          text: '#e0e7e1',
          muted: '#6b7f70'
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        '2xl': "var(--radius-2xl)",
        full: "var(--radius-pill)",
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'reverse-spin': 'reverse-spin 8s linear infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-vertical': 'scroll-vertical 40s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'scroll-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
