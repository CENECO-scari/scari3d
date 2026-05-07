# CENECO Website Local Preview

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Install

From the project root:

```bash
npm install
```

## Preview A Theme

The project contains one shared Next.js codebase and three visual variants selected through the `CENECO_THEME` environment variable.

### Minimal

```bash
npm run dev:minimal
```

### Industrial

```bash
npm run dev:industrial
```

### Corporate

```bash
npm run dev:corporate
```

If you prefer using an `.env.local` file, create it from `.env.example` and set one of these values:

```env
CENECO_THEME=minimal
```

Then run:

```bash
npm run dev
```

## Open The Site

After the dev server starts, open:

- `http://localhost:3000/ro` for Romanian
- `http://localhost:3000/en` for English

The root path `http://localhost:3000/` redirects to Romanian.

## Build For Production

Use one of the build commands below depending on the variant you want:

```bash
npm run build:minimal
npm run build:industrial
npm run build:corporate
```

Then preview the production build:

```bash
npm run start
```

## Where To Edit Things

- Copy and translated strings: `messages/ro.json`, `messages/en.json`
- Page composition: `app/[locale]/page.tsx`
- Section components: `components/`
- Theme selection and shared company data: `lib/site.ts`
- Theme colors and visual tokens: `app/globals.css`, `tailwind.config.ts`
- Placeholder images to replace later: `public/images/`

## Replacing Placeholder Images

The current visuals are SVG placeholders with descriptive labels. Replace them with real images using the same filenames if you want the existing components to pick them up automatically:

- `public/images/hero-staircase.svg`
- `public/images/software-compass.svg`
- `public/images/portfolio-helical.svg`
- `public/images/portfolio-before-after.svg`
- `public/images/portfolio-workshop.svg`
- `public/images/video-cnc.svg`

If you replace them with `.jpg`, `.png`, or `.webp` files instead, update the paths in the relevant components.

## Notes

- The language toggle swaps between `/ro` and `/en` with client-side navigation.
- The floating phone CTA always calls `+40 726 752 403`.
- The layout is a single page per locale, designed for Vercel deployment with Next.js App Router.
