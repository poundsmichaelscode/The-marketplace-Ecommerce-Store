import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './features/**/*.{ts,tsx}'],
  theme: { extend: { colors: { border:'hsl(var(--border))', background:'hsl(var(--background))', foreground:'hsl(var(--foreground))', primary:{DEFAULT:'hsl(var(--primary))', foreground:'hsl(var(--primary-foreground))'}, muted:{DEFAULT:'hsl(var(--muted))', foreground:'hsl(var(--muted-foreground))'} }, borderRadius:{ xl:'1rem', '2xl':'1.25rem' } } },
  plugins: []
};
export default config;
