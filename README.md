# Portfolio Site Starter

This is a static HTML portfolio starter for an environmental, communication, and selected work portfolio.

## Files

- `index.html`: page content and section structure
- `styles.css`: colors, typography, spacing, and responsive layout
- `script.js`: active navigation highlighting while scrolling
- `assets/`: place images, PDFs, slides, posters, and other downloadable materials here

Suggested image filenames already referenced in the HTML:

- `assets/Headshot.jpg`
- `assets/field-photo-1.jpg`
- `assets/field-photo-2.jpg`
- `assets/scicomm-materials.jpg`
- `assets/home-environment.jpg`
- `assets/home-communication-design.jpg`
- `assets/home-selected-work.jpg`

Selected work assets currently linked from the site:

- `assets/infographic.pdf`
- `assets/storymap.mov`
- `assets/Advancing_Managed_Retreat_Report.pdf`
- `assets/UCSB_Advancing_Managed_Retreat_Executive_Summary.pdf`
- `assets/20260417 Public Impact Presentation.pdf`
- `assets/Bay Sediment  in Motion Slides.pdf`
- `assets/maps/vws_hydrologic_soil_map.png`
- `assets/maps/vws_streams_map.png`
- `assets/maps/vws_habitat_map.png`
- `assets/maps/vws_fire_map.png`

## Preview

From this folder, run:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Edit

Replace the placeholder text in `index.html` with your name, biography, environmental focus,
communication/design work, selected projects, links, and downloadable materials.

Most everyday edits happen in these places:

- Text, section names, links, and image filenames: `index.html`
- Colors, fonts, spacing, square frames, and layout: `styles.css`
- Active navigation behavior: `script.js`

In `index.html`, search for bracketed placeholders like `[Your Name]`, `[Topic]`,
`[Title]`, and `[Description]`. Those are meant to be replaced directly.

## HTML vs Positioning

Use `index.html` when you want to change what appears on the page:

- words
- links
- section order
- image filenames
- captions

Use `styles.css` when you want to change where things sit:

- columns
- spacing
- image sizes
- colors
- borders
- font sizes

Helpful CSS sections to search for:

- `.hero`: first screen layout
- `.hero-visual`: three large color blocks
- `.about-layout`: headshot and bio layout
- `.image-grid`: photo grid
- `.card-grid`: environmental focus cards
- `.feature-row`: science communication rows

The three home panels are clickable links. In `index.html`, edit `href="#environmental-focus"`
to change where a panel goes. Edit `--panel-image: url('assets/home-environment.jpg')`
to change the filler image behind a panel.
