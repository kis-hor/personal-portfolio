## Personal Portfolio

Production-ready portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

### Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

### Run locally

```bash
npm install
npm run dev
```

### Deploy on Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build`.
5. Output setting: default.

### Custom `.np` domain setup

1. In Vercel Project Settings > Domains, add your domain (for example, `kishorgharti.np`).
2. At your domain registrar DNS panel, add records provided by Vercel:
   - `A` record for root (`@`) pointing to `76.76.21.21`
   - `CNAME` for `www` pointing to `cname.vercel-dns.com`
3. Wait for DNS propagation and verify domain status in Vercel.
