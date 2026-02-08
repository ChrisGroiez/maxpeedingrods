import fs from 'node:fs';
import path from 'node:path';

/**
 * Resolves a single image path by replacing {lang} with the locale code.
 * Locale is uppercased to match file naming convention (e.g. -FR, -EN, -DE).
 */
export function resolveImage(imagePath: string, locale: string): string {
  if (!imagePath.includes('{lang}')) {
    return imagePath;
  }
  return imagePath.replace('{lang}', locale.toUpperCase());
}

/**
 * Resolves an array of image paths for a given locale.
 * - Images without {lang} are always included (universal images like -Main, -all)
 * - Images with {lang} are resolved to the locale and included only if the file exists
 * - This runs at build time (SSG) so fs checks are safe
 */
export function resolveImages(imagePaths: string[], locale: string): string[] {
  const publicDir = path.resolve(process.cwd(), 'public');
  const resolved: string[] = [];

  for (const imagePath of imagePaths) {
    if (!imagePath.includes('{lang}')) {
      resolved.push(imagePath);
      continue;
    }

    const resolvedPath = resolveImage(imagePath, locale);
    const filePath = path.join(publicDir, resolvedPath);

    if (fs.existsSync(filePath)) {
      resolved.push(resolvedPath);
    }
  }

  return resolved;
}
