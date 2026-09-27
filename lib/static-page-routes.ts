import fs from 'node:fs'
import path from 'node:path'

const APP_DIR = path.join(process.cwd(), 'app')

const SKIP_DIRS = new Set(['api'])

function collectRoutes(dir: string): string[] {
  const routes: string[] = []

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      routes.push(...collectRoutes(path.join(dir, entry.name)))
      continue
    }

    if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      const relDir = path.relative(APP_DIR, path.dirname(path.join(dir, entry.name)))
      const route =
        !relDir || relDir === '.'
          ? '/'
          : `/${relDir.split(path.sep).join('/')}`
      routes.push(route)
    }
  }

  return routes
}

// Discovered from app directory page.tsx files (api routes excluded).
export function getStaticPageRoutes(): string[] {
  return collectRoutes(APP_DIR).sort((a, b) => a.localeCompare(b))
}
