# Photography

## Adding a New Album

1. **Create album folder** in `src/assets/photography-assets/`:
   ```
   src/assets/photography-assets/
   └── my-new-album/
       ├── highlights/    # Featured images for index page
       │   ├── photo1.jpg
       │   └── photo2.jpg
       └── others/        # Additional images
           ├── photo3.jpg
           └── photo4.jpg
   ```

2. **Add album to static paths** in `src/pages/photography/[slug].astro`:
   ```javascript
   export function getStaticPaths() {
     const albums = ['paris-london', 'summer-2025', 'my-new-album'];
     return albums.map(slug => ({ params: { slug } }));
   }
   ```

3. **Add album metadata** in the same file:
   ```javascript
   const albumTitles: Record<string, string> = {
     'paris-london': 'Paris & London',
     'summer-2025': 'Summer 2025',
     'my-new-album': 'My New Album',
   };

   const albumYears: Record<string, string> = {
     'paris-london': '2022',
     'summer-2025': '2025',
     'my-new-album': '2026',
   };
   ```

4. **Update index grid** in `src/pages/photography/index.astro`:
   - Add entries to the `photoData` array
   - Set `gridColumn` and `gridRow` for layout spanning
   - Add optional `caption` for location/year overlay

## Index Grid Layout

The photography index uses a CSS grid with spanning tiles:

```javascript
const photoData = [
  { album: 'my-album', caption: "location, '24", gridColumn: 'span 2', gridRow: 'span 2' },
  { album: 'my-album', gridRow: 'span 2' },
  { album: 'my-album' },  // Standard 1x1 tile
  { album: 'my-album', gridColumn: 'span 3', caption: "another location" },
];
```

| Property | Description |
|----------|-------------|
| `album` | Folder name in photography-assets |
| `caption` | Optional overlay text (location, year) |
| `gridColumn` | CSS grid-column value (e.g., "span 2", "span 3") |
| `gridRow` | CSS grid-row value (e.g., "span 2") |

## Image Organization

- **highlights/**: Images shown on the main photography index page
- **others/**: Additional album images shown on the album detail page
- All images from both folders appear in the album detail page
- Landscape images (width > height) automatically span full width on detail pages

## Lightbox

- Click any image to open the lightbox
- Use arrow keys or buttons to navigate
- Press Escape or click outside to close

## Optional: MDX Blog Posts

You can also create MDX posts in `src/pages/photography/posts/` for albums with written content:

```mdx
---
title: "Paris and London"
description: "Trip description"
assetName: "paris-london"
pubDate: 2022-07-01
---

import PhotoGrid from '../../../components/PhotoGrid.astro';

<PhotoGrid images={["photo1.jpg", "photo2.jpg"]} />

Your written content here...
```
