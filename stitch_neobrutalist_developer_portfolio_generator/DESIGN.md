---
name: Glitch Logic
colors:
  surface: '#fff9ec'
  surface-dim: '#e0dac9'
  surface-bright: '#fff9ec'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e2'
  surface-container: '#f4eddd'
  surface-container-high: '#eee8d7'
  surface-container-highest: '#e9e2d2'
  on-surface: '#1e1c12'
  on-surface-variant: '#5a4042'
  inverse-surface: '#333025'
  inverse-on-surface: '#f7f0df'
  outline: '#8e7071'
  outline-variant: '#e2bec0'
  surface-tint: '#b71b40'
  primary: '#b71b40'
  on-primary: '#ffffff'
  primary-container: '#ff5470'
  on-primary-container: '#5d0019'
  inverse-primary: '#ffb2b8'
  secondary: '#6d5e00'
  on-secondary: '#ffffff'
  secondary-container: '#fddc00'
  on-secondary-container: '#706000'
  tertiary: '#0053db'
  on-tertiary: '#ffffff'
  tertiary-container: '#638cff'
  on-tertiary-container: '#00256c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b8'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#91002c'
  secondary-fixed: '#ffe24a'
  secondary-fixed-dim: '#e3c600'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#524600'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#fff9ec'
  on-background: '#1e1c12'
  surface-variant: '#e9e2d2'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
spacing:
  unit: 4px
  gutter: 24px
  margin-page: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

This design system targets the modern software engineering landscape through an **Experimental Neobrutalist** lens. It is designed for developers who view code as both a craft and a disruptive force. The aesthetic is raw, unrefined, and unapologetically digital, evoking the "tech-glitch" spirit of early terminal interfaces and underground hacker culture.

The emotional response should be one of high energy and technical confidence. By utilizing radical asymmetry, heavy linework, and a "sticker-book" layout philosophy, the UI feels active rather than passive. It avoids the polished sterility of modern SaaS in favor of a visceral, high-contrast experience that celebrates the "under the hood" nature of software development.

## Colors

The palette is built on extreme contrast to ensure maximum visual impact and legibility.
- **Background:** The canvas uses a warm Off-white (`#FFF8E7`) to prevent the harshness of pure white while maintaining a "paper-like" brutalist feel.
- **Accents:** Hot Pink (`#FF5470`) serves as the primary energetic driver. Electric Yellow (`#FFDE00`) and Cobalt Blue (`#3772FF`) are used for secondary actions, categorization, and "sticker" highlights.
- **Structure:** Pure Black (`#000000`) is the absolute anchor, used for all borders, shadows, and primary text. No gradients or transparencies are permitted; color application is strictly flat.

## Typography

The typography pairing reinforces the "Tech-Glitch" narrative.
- **Headlines:** Space Grotesk is used for its aggressive, geometric forms. It should be tracked slightly tighter in large sizes to create a dense, impactful visual block.
- **Body & Labels:** Space Mono provides a monospaced, technical feel that suggests terminal output. It ensures that even long-form content maintains a "code-adjacent" atmosphere.
- **Hierarchy:** Use heavy weights for headlines to compete with the thick 3px borders. All labels should be strictly monospaced to denote data or metadata.

## Layout & Spacing

This design system utilizes a **Fluid Grid with Intentional Asymmetry**. 
- **Columns:** A 12-column grid is the foundation, but elements should frequently "break" the grid by shifting 4-8px off-axis to create a sense of mechanical error or "glitch."
- **Borders:** A universal 3px black border is applied to all container elements.
- **Rhythm:** Spacing follows a 4px baseline. Components are often packed tightly together or separated by massive gaps (32px+) to emphasize the raw, brutalist structure.
- **Responsive:** On mobile, margins reduce to 16px, and the 12-column grid collapses to a single-column stack, maintaining the 3px border weight for consistency.

## Elevation & Depth

Depth is achieved through **Hard-Offset Shadows** rather than Z-axis blurring or lighting simulations.
- **The Shadow:** Every elevated element (buttons, cards, badges) must feature a 6px 6px 0px #000000 offset shadow. There is no blur radius.
- **Tonal Layers:** Since the background is off-white, cards use pure white (#FFFFFF) backgrounds to pop against the canvas.
- **Interactive Shift:** To simulate a "physical click," interactive elements must translate 4px down and 4px to the right on hover/active states, while the shadow simultaneously shrinks to 2px 2px. This creates a tactile "pressing" effect.

## Shapes

The shape language is strictly **Sharp and Linear**. 
- **Corners:** 0px radius is the default for all major containers and buttons to maintain the brutalist integrity. 
- **Stickers:** Small badges or tags may use a maximum of 4px rounding to differentiate them as "overlays" or "stickers" on the rigid layout.
- **Asymmetry:** Rectangles should be the primary form, occasionally rotated by 1-2 degrees to reinforce the glitch aesthetic.

## Components

### Buttons
Buttons must have a 3px black border and the signature 6px hard shadow. Use Hot Pink or Electric Yellow for primary actions. The text is always uppercase Space Mono Bold. On hover, the button translates (+4px, +4px) and the shadow decreases.

### Cards
Cards are containers for project showcase and content blocks. They utilize a white background with 3px black borders. Headers within cards should be separated by a 3px horizontal rule.

### Stickers/Badges
Used for tech stack labels (e.g., "React", "TypeScript"). These are small, high-contrast blocks (Cobalt Blue or Hot Pink background) with white monospaced text. They are often placed at slight angles (2-3 degrees) over the corners of cards.

### Input Fields
Inputs are white boxes with 3px black borders. The placeholder text uses Space Mono in a 50% opacity black. Focus states swap the background color to a very pale version of Electric Yellow.

### Checkboxes & Radios
Custom-built as sharp squares/circles with 3px borders. The "checked" state is indicated by a solid black fill or a large "X" in Space Mono.