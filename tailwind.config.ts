import type {Config} from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        'surface-strong': 'var(--color-surface-strong)',
        line: 'var(--color-line)',
        accent: 'var(--color-accent)',
        'accent-strong': 'var(--color-accent-strong)',
        'accent-soft': 'var(--color-accent-soft)',
        badge: 'var(--color-badge)',
        glow: 'var(--color-glow)'
      },
      fontFamily: {
        body: ['var(--font-body)'],
        display: ['var(--font-display)']
      },
      boxShadow: {
        soft: '0 28px 80px -28px var(--shadow-color)',
        frame: '0 0 0 1px var(--color-line)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, color-mix(in srgb, var(--color-accent) 24%, transparent) 0%, transparent 56%)'
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
};

export default config;
