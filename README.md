# Freedom S: An Omeka S Theme

[![release v1.1.0](https://img.shields.io/badge/release-v1.1.0-blue?logo=git)](https://github.com/omeka-s-themes/freedom/releases/latest)
[![Omeka v4.2.0+](https://img.shields.io/badge/Omeka-v4.2.0+-darkred.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMiIgdmlld0JveD0iMCAwIDM4NCAyNDAiIHdpZHRoPSIzODQiIGhlaWdodD0iMjQwIj4KCTxzdHlsZT4KCQkuczAgeyBvcGFjaXR5OiAxO2ZpbGw6ICNmZmZmZmYgfSAKCTwvc3R5bGU+Cgk8cGF0aCBpZD0iUGF0aCAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsYXNzPSJzMCIgZD0ibTAgMGgzODR2MjQwaC0zODR6bTcuMDIgMTc3LjVjNy44LTIzLjI1IDEzLjE3LTM2LjMgMTYuOTctNDQgMy43OS03LjcgOS45OC0xOC43MiAxMy43Ni0yNC41IDMuNzgtNS43OCAxMC41LTE1IDE0Ljk0LTIwLjUgNC40My01LjUgMTMuMTgtMTQuOTYgMTkuNDMtMjEuMDEgNi4yNi02LjA2IDE0Ljk4LTEzLjc2IDE5LjM4LTE3LjExIDQuNC0zLjM1IDEyLjI4LTguOSAxNy41LTEyLjM0IDUuMjItMy40NCAxNi4yNS05LjU3IDI0LjUtMTMuNjMgOC4yNS00LjA2IDIxLjA3LTkuNDEgMjguNS0xMS44OGwxMy41LTQuNS0xNjguNS0wLjAzem0yODQuOTgtMTY3LjExYzMuMDIgMS4yNiA4Ljg3IDQuMDEgMTMgNi4wOSA0LjEyIDIuMDggMTEuMzEgNi4zMiAxNS45NyA5LjQxIDQuNjYgMy4wOCAxMy4xNiAxMC4xMSAxOC44NyAxNS42MSA1LjcyIDUuNSAxMy4xIDEzLjYgMTYuNCAxOCAzLjMgNC40IDcuODMgMTEuMTUgMTAuMDggMTUgMi4yNCAzLjg1IDYgMTEuNSA4LjM2IDE3bDQuMjggMTAgMC4wNC05My41LTkyLjUgMC4wOHptLTEwMiA0LjE5Yy00LjEzIDAuOTEtMTEuMzMgMi43NC0xNiA0LjA3LTQuNjggMS4zMy0xMi43OCA0LjA1LTE4IDYuMDQtNS4yMyAxLjk4LTE0LjQ1IDYuMDgtMjAuNSA5LjEtNi4wNSAzLjAyLTEzLjkzIDcuMzEtMTcuNSA5LjU0LTMuNTggMi4yMi0xMS42OCA3Ljg4LTE4IDEyLjU3LTYuMzMgNC42OS0xNi45MiAxMy45NC0yMy41NCAyMC41Ny02LjYyIDYuNjItMTUgMTUuODYtMTguNjMgMjAuNTQtMy42MiA0LjY3LTkuMDYgMTIuMzItMTIuMSAxNy0zLjA0IDQuNjctOC4wMSAxMy4yMi0xMS4wNCAxOS0zLjAzIDUuNzctNy42MiAxNS45LTEwLjIgMjIuNS0yLjU5IDYuNi02LjE5IDE3Ljg1LTguMDIgMjUtMS44MyA3LjE1LTQgMTcuNzItNC44NCAyMy41LTAuODMgNS43Ny0xLjg4IDE1LjExLTIuMzIgMjAuNzZsLTAuODEgMTAuMjUgMjI1LjUtMC4wMXYtMjI1Yy0xMi43OSAwLjE2LTIxIDAuODEtMjYuNSAxLjU2LTUuNSAwLjc1LTEzLjM4IDIuMS0xNy41IDMuMDF6bTUxIDEzMS40M2gxMzZjLTAuODctMTEuMjQtMS44MS0xOC4zMy0yLjY1LTIzLTAuODQtNC42OC0yLjY3LTEyLjEtNC4wNi0xNi41LTEuNC00LjQtNC4zMS0xMS44My02LjQ3LTE2LjUtMi4xNy00LjY4LTYuOTEtMTMtMTAuNTYtMTguNS00LjI5LTYuNDktMTAuNTEtMTMuODgtMTcuNjktMjEuMDQtNi4yNS02LjIyLTE0Ljc4LTEzLjQ5LTE5LjU3LTE2LjY3LTQuNjgtMy4wOS0xMi43OC03LjcxLTE4LTEwLjI1LTUuMjMtMi41NS0xMy43OC01Ljk1LTE5LTcuNTYtNS4yMy0xLjYxLTEzLjU1LTMuNjItMTguNS00LjQ3LTQuOTUtMC44NC0xMS4zNy0xLjUzLTE0LjI1LTEuNTJsLTUuMjUgMC4wMXptLTAuMDEgMTguNWMzLjg4LTUuODEgNi42OS04LjYzIDguNzYtMTAuMDFsMy43NS0yLjUtMTIuNSAwLjAxem01NS4wMSA2OC41YzQuNjUgMCA5LjQ4LTAuNzIgMTMuNzUtMS41OSA0LjI2LTAuODcgMTEuMTItMi45OSAxNS4yNS00LjcxIDQuMTItMS43MSAxMC42NS01LjIzIDE0LjUtNy44IDMuODUtMi41OCAxMC4xNi04IDE0LjAzLTEyLjA0IDMuODctNC4wNSA4LjkyLTEwLjUxIDExLjIxLTE0LjM2IDIuMy0zLjg1IDUuMzItMTAuMDQgNi43MS0xMy43NSAxLjQtMy43MSAzLjIzLTEwLjY5IDQuMDYtMTUuNSAwLjgzLTQuODEgMS41LTkuMzEgMS41LTEwLTAuMDEtMC45OC04Ljc5LTEuMjUtNDAuNTEtMS4yNWgtNDAuNXptLTIxLTY3YzEyLjU1IDAgMTQtMC4zMSAxNC0xLjUgMC0wLjgzLTEuMjQtMi45My0yLjc1LTQuNjctMS41Mi0xLjc0LTQuMjItMy43Ny02LTQuNS0xLjc5LTAuNzMtMy43LTEuMzMtNC4yNS0xLjMzLTAuNTYgMC0xIDIuNjYtMSA2em0tMjEuMjEtNS40OGMtMi43OSAxLjk2LTUuMjYgNC45NS03LjA1IDguNS0xLjUyIDMuMDEtMi43NiA2LjcyLTIuNzUgOC4yM2wwLjAxIDIuNzVoMjVjMC0yMy43Ny0wLjE4LTI0Ljk5LTEuNzUtMjQuOTMtMC45NyAwLjA1LTMuNDIgMC42MS01LjQ2IDEuMjUtMi4wNCAwLjY1LTUuNjQgMi41NC04IDQuMnptMjkuNDYgMTguNTFjMC42OCAwLjAyIDEuOTctMC43NyAyLjg0LTEuNzUgMC44OC0wLjk4IDEuOS0yLjM0IDIuMjUtMy4wMyAwLjQ3LTAuODktMC4zNi0xLjI1LTIuODQtMS4yNS0zLjIzIDAtMy41IDAuMjQtMy41IDMgMCAxLjcxIDAuNTMgMy4wMSAxLjI1IDMuMDN6bS0zOC4wMSAxMy4yMmMwLjMgMy40NCAxLjU3IDguOTUgMi44NCAxMi4yNSAxLjI3IDMuMyA0LjE2IDguMjUgNi40MiAxMSAyLjI2IDIuNzUgNi4zNCA2LjY3IDkuMDYgOC43MiAyLjcxIDIuMDQgNy4xOSA0LjU5IDkuOTQgNS42NSAyLjc1IDEuMDYgNy4zNyAyLjMxIDEwLjI2IDIuNzhsNS4yNyAwLjg1LTAuMDMtNDcuNWgtNDQuM3ptMTI1Ljk1IDcuMjVjLTMuMjMgNC45NS04LjMgMTEuNS0xMS4yOCAxNC41NS0yLjk4IDMuMDUtNy44OSA3LjQyLTEwLjkxIDkuNy0zLjAzIDIuMjktOC40MyA1Ljc0LTEyIDcuNjhsLTYuNSAzLjUyIDQ4LjUgMC4wNWMwLTM3Ljk4LTAuMTktNDktMC40MS00OS0wLjIzIDAtMC42NiAxLjAxLTAuOTcgMi4yNS0wLjMxIDEuMjQtMy4yIDYuMy02LjQzIDExLjI1em0tMTMwLjE5IDM1LjVoMjFjLTcuMzctNi4wMS0xMC45My05LjI4LTEyLjY4LTExLjEzLTEuNzUtMS44Ni00LjM0LTUuNC01Ljc0LTcuODdsLTIuNTYtNC41eiIvPgo8L3N2Zz4=)](https://github.com/omeka/omeka-s/releases/latest)
[![PHP v8.1+](https://img.shields.io/badge/PHP-v8.1+-605F8E?logo=php)](https://github.com/omeka-s-themes/freedom)

An Omeka S theme offering a variety of customization options and a clean design, built using modular styling and a mobile-first approach, with a modern and accessible UX/UI.

![Freedom Theme](https://github.com/omeka-s-themes/freedom/blob/master/theme.jpg?raw=true)

## Installation

For basic out-of-the-box use of the theme, follow the [Omeka S User Manual instructions for installing themes](https://omeka.org/s/docs/user-manual/sites/site_theme/#installing-themes).

For more advanced use, such as customizing the theme with Sass, you'll need to install the tools with [NodeJS](https://nodejs.org/en/) (0.12 or greater). Navigate to your theme directory and run `npm install`.

## Theme settings

### Theme's Primary Color
The color to be used as the theme's primary color. The default value is #cb4b06 (RGB 203, 75, 6).

### Header Layout
- Inline logo and menu
- Centered logo and menu

### Top Navigation Depth
Maximum number of levels to show in the site's top navigation bar. Set to 0 to show all levels.

### Logo
A custom logo (SVG, JPG, PNG)

### Banner
- Banner image
- Heading
- Description
- Content position
- Banner width
- Banner height
- Banner height for mobile devices
- Banner image vertical position within the wrapper
- Banner image horizontal position within the wrapper

### Footer
- Footer Logo
- Footer Site description
- Footer Menu
- Footer Menu Depth
- Footer Content
- Footer Copyright

### Social Media
- Facebook
- Twitter
- LinkedIn
- Instagram
- Youtube
- Mastodon

### Image Settings
- Decorative border for Media and/or Assets

### Resource Tags
- Show tags based on Resource Type or Class

### Browse Settings
- Layout for Browse Pages
- Truncate Body Property

## Customizing the Theme

If you want to customize the site with your own CSS, the [CSS Editor](https://omeka.org/s/modules/CSSEditor/) module allows site administrators to write style overrides.

For advanced CSS and Sass users, this theme includes variables and mixins for managing and extending many styles.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm run start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
* **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.

### Sass File Structure

```bash
sass
    ├── abstracts
    │   ├── mixins
    │   └── variables
    │       ├── breakpoints
    │       ├── colors
    │       ├── layout
    │       └── typography
    ├── base
    │   ├── elements
    │   │   ├── body
    │   │   ├── buttons
    │   │   ├── caption
    │   │   ├── fields
    │   │   ├── hr
    │   │   ├── icons
    │   │   ├── language-tag
    │   │   ├── links
    │   │   ├── lists
    │   │   ├── media
    │   │   ├── resource-description
    │   │   ├── resource-tag
    │   │   ├── tables
    │   │   ├── titles
    │   │   └── tooltip
    │   ├── layout
    │   │   ├── layout
    │   │   └── regions
    │   └── typography
    │       ├── copy
    │       ├── headings
    │       └── typography
    ├── components
    │   ├── accordion
    │   ├── advanced-search
    │   ├── annotation
    │   ├── banner
    │   ├── blocks
    │   │   ├── assets
    │   │   ├── browse-preview
    │   │   ├── carousel
    │   │   ├── collecting
    │   │   ├── item-showcase
    │   │   ├── item-with-metadata
    │   │   ├── list-of-sites
    │   │   ├── media-embed
    │   │   ├── table-of-contents
    │   │   └── timeline
    │   ├── breadcrumbs
    │   ├── facets
    │   ├── footer
    │   ├── header
    │   ├── linked-resources
    │   ├── metadata
    │   ├── navigation
    │   ├── pagination
    │   ├── resources
    │   │   ├── browse-controls
    │   │   ├── resource-grid
    │   │   ├── resource-list
    │   ├── search-results
    │   ├── uri-dereferencer
    │   └── user-bar
    ├── generic
    │   ├── box-sizing
    │   └── normalize
    └── utilities
        ├── accessibility
        ├── alignments
        └── clearfix
```

## Utility classes
Freedom S offers a set of predefined utiliy classes that will help you to add styles to certain elements by just assigning them these classes.

You can even combine multiple utility classes.

- `inline`
- `alignleft`
- `alignright`
- `aligncenter`
- `alignfull`
- `alignwide`
- `alignnarrow`
- `textleft`
- `textright`
- `textcenter`
- `clearfix`
- `screen-reader-text`


## Copyright
Freedom S is Copyright © 2023-present Corporation for Digital Scholarship, Vienna, Virginia, USA http://digitalscholar.org

The Corporation for Digital Scholarship distributes the Omeka source code
under the GNU General Public License, version 3 (GPLv3). The full text
of this license is given in the license file.

The Omeka name is a registered trademark of the Corporation for Digital Scholarship.

Third-party copyright in this distribution is noted where applicable.

All rights not expressly granted are reserved.
