# Viewport Scaling Implementation

This document explains the fixed-aspect-ratio viewport scaling implementation for the Jinette Ramos Photography website.

## Overview

The website now uses a viewport scaling approach that ensures the entire application scales proportionally on any device while maintaining a 16:9 aspect ratio (1920x1080 reference design). This means:

- ✅ The website always fits inside any viewport (mobile, tablet, desktop)
- ✅ No content is cropped or lost
- ✅ No layout rearrangement or stacking
- ✅ Desktop design is preserved on all devices (just scaled smaller)
- ✅ Content is centered with letterboxing when needed

## Implementation Details

### 1. CSS Variables (index.css)

```css
:root {
  --viewport-scale: 1;
  --design-width: 1920;
  --design-height: 1080;
}
```

These CSS variables control the scaling behavior:
- `--viewport-scale`: Dynamic scale factor calculated by JavaScript
- `--design-width`: Reference width (1920px)
- `--design-height`: Reference height (1080px)

### 2. HTML/Body Reset (index.css)

```css
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #000;
}
```

This removes default margins/padding and prevents scrollbars. The black background provides letterboxing when the viewport aspect ratio differs from 16:9.

### 3. Root Container (index.css)

```css
#root {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}
```

The React root element centers the scaled content using flexbox.

### 4. Viewport Fit Container (index.css)

```css
.viewport-fit-container {
  width: var(--design-width);
  height: var(--design-height);
  transform: scale(var(--viewport-scale));
  transform-origin: center center;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}
```

This is the key class that:
- Sets fixed dimensions matching the design (1920x1080)
- Applies the dynamic scale transform
- Centers the scaling from the middle (transform-origin)
- Contains all app content

### 5. Resize Handler (App.jsx)

```javascript
useEffect(() => {
  const updateScale = () => {
    const designWidth = 1920;
    const designHeight = 1080;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate scale to fit viewport while maintaining aspect ratio
    const scaleX = viewportWidth / designWidth;
    const scaleY = viewportHeight / designHeight;
    const scale = Math.min(scaleX, scaleY);
    
    // Update CSS variable
    document.documentElement.style.setProperty('--viewport-scale', scale);
  };

  updateScale(); // Initial scale
  window.addEventListener('resize', updateScale);
  
  return () => window.removeEventListener('resize', updateScale);
}, []);
```

This React hook:
- Calculates the appropriate scale factor on mount and resize
- Uses `Math.min()` to ensure content always fits (never crops)
- Updates the CSS variable dynamically
- Cleans up event listener on unmount

### 6. Content Wrapper (App.jsx)

```jsx
return (
  <div className="viewport-fit-container">
    <div className="flex flex-col min-h-screen bg-white text-gray-800" 
         style={{ width: '1920px', height: '1080px' }}>
      {/* App content */}
    </div>
  </div>
);
```

The app content is wrapped in two divs:
- Outer: `.viewport-fit-container` (applies scaling)
- Inner: Fixed 1920x1080 dimensions with all content

## How It Works

1. **On Page Load**: The resize handler calculates the initial scale based on the current viewport size
2. **Scale Calculation**: Compares viewport dimensions to design dimensions (1920x1080) and chooses the smaller scale factor
3. **Transform Applied**: The CSS `transform: scale()` is applied to the entire content container
4. **Centering**: Flexbox centers the scaled content in the viewport
5. **On Resize**: The handler recalculates and updates the scale smoothly

## Examples

### Desktop (1920x1080)
- Scale: 1.0 (no scaling)
- Content fills entire viewport

### Laptop (1366x768)
- Scale: ~0.711 (based on height constraint)
- Content is scaled down with black bars on left/right

### Tablet (768x1024)
- Scale: 0.4 (based on width constraint)
- Content is scaled down with black bars on top/bottom

### Mobile (375x667)
- Scale: ~0.195 (based on width constraint)
- Content is scaled down significantly with black bars on top/bottom

## Benefits

1. **Consistent Layout**: Desktop design is preserved across all devices
2. **No Breakpoints Needed**: Single layout works everywhere
3. **No Content Loss**: Everything is always visible
4. **Maintainable**: Changes to desktop design automatically work on mobile
5. **Performance**: Uses CSS transforms (GPU accelerated)

## Trade-offs

1. **Small Text on Mobile**: Text may be small on phones (but readable when zoomed)
2. **Letterboxing**: Black bars appear when aspect ratios don't match
3. **Fixed Aspect**: Cannot take advantage of portrait layouts on mobile

## Customization

To change the reference resolution, update these values:
- CSS variables in `index.css`: `--design-width` and `--design-height`
- JavaScript constants in `App.jsx`: `designWidth` and `designHeight`
- Inner div style in `App.jsx`: `width` and `height`

## Browser Support

This implementation uses:
- CSS variables (all modern browsers)
- CSS transforms (all modern browsers)
- flexbox (all modern browsers)
- addEventListener (all browsers)

Fully supported in:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Testing

Test the viewport scaling by:
1. Resizing browser window
2. Testing on different device sizes
3. Using browser dev tools device emulation
4. Checking orientation changes on mobile

The content should always be fully visible, never cropped, and maintain its layout structure.
