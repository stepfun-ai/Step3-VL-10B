# Step 3.5 Air - Technical Brief Landing Page

## Overview

A research-institute style single-page website for the Step 3.5 Air model announcement. Clean, rigorous, and minimal marketing approach with technical report aesthetics.

## Features

### Dual Theme Support
- **Theme A**: Blue primary with light background - More vibrant, tech-forward feel
- **Theme B**: White primary with subtle blue accents - Clean, paper-like academic style

Both themes maintain:
- Low saturation color palette
- Clean typography with proper hierarchy
- Consistent spacing and alignment
- No gradients or flashy animations

### Bilingual Support
- Chinese (中文) and English toggle
- All content fully translated
- Language preference persisted in localStorage

### Page Structure
1. **Header** - Sticky navigation with logo, section links, theme/language toggles
2. **Hero** - Title, subtitle, meta info, external links, key metrics
3. **Abstract** - Model overview and contributions with citation button
4. **Benchmark** - 4 compact tables covering Knowledge, Math, Code/SWE, Agent capabilities
5. **Showcase** - 4 subsections (Image, Voice, GUI, Research) with interactive sample tabs
6. **Technical Innovation** - Adaptive Expert Routing with formulas and figure placeholder
7. **Footer** - CTA buttons, Roadmap, Limitations

### Key Design Decisions
- Maximum content width: 1120px (text), 1280px (tables)
- Tables display all columns without horizontal scroll
- Showcase uses subsections (not tabs) for categories, with tabs only for samples within each category
- Animations limited to Showcase tab transitions only
- MathJax for formula rendering

## File Structure
```
step3p5_air_0108/
├── index.html    # Main HTML structure
├── styles.css    # CSS with dual theme variables
├── script.js     # i18n, theme toggle, interactions
└── README.md     # This file
```

## Usage

1. Open `index.html` in a browser
2. Click "B" button to toggle between Theme A and Theme B
3. Click "EN" button to switch between Chinese and English

## Requirements Met

- ✅ 5 clear sections: Head, BMK, Showcase, Technical Innovation, Footer
- ✅ 4 benchmark tables covering 6 dimensions
- ✅ Showcase with 4 subsections, each with sample tabs
- ✅ Technical innovation with formulas and figure
- ✅ CTA, Roadmap, and Limitations in footer
- ✅ Dual theme support (A: blue primary, B: white primary)
- ✅ Chinese/English bilingual with manual toggle
- ✅ Pure color backgrounds, no gradients
- ✅ Animations only in Showcase tab switching
