# Graphic Design

## Adding a New Project

1. **Create a folder** in `src/assets/graphic-design-assets/` with your project slug:
   ```
   src/assets/graphic-design-assets/
   └── my-new-project/
       ├── hero-image.jpg      # Will be used as thumbnail
       ├── detail-1.jpg        # Gallery images
       ├── detail-2.jpg
       └── detail-3.png
   ```

2. **Add project metadata** to `src/content/graphic-design.json`:
   ```json
   {
     "id": "my-new-project",
     "title": "My New Project",
     "category": "identity",
     "year": 2026,
     "assetFolder": "my-new-project",
     "thumbnail": "hero-image.jpg",
     "summary": "A brief description of the project...",
     "role": "art direction, identity",
     "client": "Client Name",
     "deliverables": "logo, signage, web"
   }
   ```

## Project Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | URL slug (must match folder name) |
| `title` | string | Display title |
| `category` | string | Type of work (identity, editorial, branding, etc.) |
| `year` | number | Year completed |
| `assetFolder` | string | Folder name in `graphic-design-assets/` |
| `thumbnail` | string | Filename of the thumbnail/hero image |
| `summary` | string | Project description for detail page |
| `role` | string | Your role in the project |
| `client` | string | Client name |
| `deliverables` | string | What was delivered |

## How It Works

- **Index page**: Shows the `thumbnail` image for each project in a 2-column grid
- **Detail page**: 
  - Uses `thumbnail` as the hero image at the top
  - All other images in the folder appear in the gallery below
  - Click any gallery image to open in lightbox
- Projects are automatically sorted by year (newest first)
- Prev/next navigation cycles through all projects

## File Organization

```
src/
├── assets/graphic-design-assets/
│   ├── mint-manor-cafe/
│   │   ├── march-poup-poster.jpg  ← thumbnail
│   │   ├── cafe-first.jpg
│   │   └── ...
│   └── film-festival/
│       ├── film-festival-1.jpg    ← thumbnail  
│       └── ...
└── content/
    └── graphic-design.json        ← metadata
```