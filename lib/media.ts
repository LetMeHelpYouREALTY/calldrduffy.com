/**
 * Heavy media (community videos) is served from Cloudflare R2 at
 * media.calldrduffy.com, bucket `calldrduffy-media`, not from Vercel.
 * Objects are immutable: to change a file, upload under a new version folder
 * (v2, v3…) and bump MEDIA_VERSION. Browser cache is 1 year, edge cache 30 days.
 *   videos/v1/<slug>-720.mp4 / -720.jpg  → website (720×1280, ~1.3 MB)
 *   videos/v1/social/<slug>.mp4 / .jpg   → social originals (1080×1920)
 */
export const MEDIA_HOST = 'https://media.calldrduffy.com'
export const MEDIA_VERSION = 'v1'
export const mediaVideo = (slug: string) => `${MEDIA_HOST}/videos/${MEDIA_VERSION}/${slug}-720.mp4`
export const mediaPoster = (slug: string) => `${MEDIA_HOST}/videos/${MEDIA_VERSION}/${slug}-720.jpg`
