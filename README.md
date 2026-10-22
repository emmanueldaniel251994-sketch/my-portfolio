# AI Engineering Portfolio

A responsive, dark-first portfolio built with Next.js, TypeScript, Tailwind CSS v4, and Lucide icons. It presents selected AI, software, and cloud projects with careful notes about prototypes and simulated data.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

1. Import `emmanueldaniel251994-sketch/my-portfolio` from GitHub in Vercel.
2. Keep the framework preset as Next.js and the root directory as `./`.
3. No environment variables are required for the portfolio itself.
4. Deploy. Future commits to the connected branch will trigger deployments.

## Before sharing publicly

- Confirm the displayed name, contact email, and profile links are correct.
- Add your own portrait and project screenshots only after you have suitable assets; do not use fabricated screenshots as proof of working features.
- Verify each repository and demo URL is still public and working.
- Replace the generic LinkedIn link in `app/page.tsx` with your profile URL.
- Review project descriptions against the latest source code. Simulated telemetry, experimental ML, and prototype risk scores are explicitly described as such.

## Project image placeholders

The current version uses a terminal-style visual built in CSS, so it does not depend on external screenshots. If you add screenshots later, place them under `public/images/projects/<project-slug>/` and add descriptive alt text and captions.

## Security

Do not add API keys or private credentials to this public repository. The site uses no secrets or runtime API calls.
