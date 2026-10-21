# Swagarage visual update

## What changed
- Blue + orange brand system strengthened across the UI.
- Hero is now animated on entry with moving gradient blobs, grid, image scan, parallax tilt, orbit lines and floating vector badges.
- What We Do cards now use the supplied product images with animated SVG/vector overlays, vector icons, hover zoom and active-card motion.
- Added a floating WhatsApp CTA.
- Static image paths use `/assets/...` for Vite/Vercel because images live in `public/assets`.

## WhatsApp setup
Create/update `.env` in the project root:

```env
VITE_WHATSAPP_NUMBER=919XXXXXXXXX
```

Use the WhatsApp number in international format without `+`, spaces or hyphens.

Example:

```env
VITE_WHATSAPP_NUMBER=919876543210
```

Restart Vite after changing `.env`:

```bash
npm run dev
```

For Vercel, add the same variable under **Project Settings → Environment Variables**, then redeploy.
