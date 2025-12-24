# IDBH Design - Interior Design Portfolio Website Guidelines

## Design Approach
**Reference Strategy**: Inspired by high-end design portfolios like Studio McGee, Bjarke Ingels Group (BIG), and Gensler - combining luxury hospitality aesthetics with architectural sophistication. Focus on showcasing work through immersive imagery and restrained elegance.

## Typography System
**Primary Font**: Cormorant Garamond (serif) - For headlines, project titles, and elegant statements
**Secondary Font**: Inter (sans-serif) - For body text, navigation, and UI elements

**Hierarchy**:
- Hero Headlines: 72px/64px (desktop/tablet), 48px (mobile), Cormorant Light
- Section Headers: 48px/40px, Cormorant Regular
- Project Titles: 32px, Cormorant Medium
- Body Large: 20px, Inter Regular
- Body Text: 16px, Inter Regular, 1.6 line-height
- Navigation/UI: 14px, Inter Medium, letter-spacing 0.5px

## Layout System
**Spacing Primitives**: Tailwind units 4, 6, 8, 12, 16, 20, 24, 32
**Container Strategy**: 
- Full-width hero sections with max-w-7xl inner containers
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

**Grid Patterns**:
- Project galleries: 2-column masonry grid (desktop), single column (mobile)
- Service cards: 3-column grid (desktop), 2-column (tablet), single (mobile)

## Page Structure & Sections

### 1. Hero Section (100vh)
Full-screen featured project image with subtle overlay gradient. Centered headline + brief tagline. Scroll indicator animation. NO floating elements.

### 2. Introduction Block (py-24)
Two-column layout: Left - compelling narrative about IDBH's philosophy (max-w-prose), Right - key statistics or awards in clean typography

### 3. Featured Projects Showcase (py-32)
Asymmetric masonry grid displaying 6-8 hero projects. Each project card: Large image, project name, category tag, subtle hover reveal of brief description. Mix of landscape/portrait image ratios for visual interest.

### 4. Services Overview (py-24)
Three-column grid: Healthcare Design, Senior Living, Commercial Spaces. Each includes custom icon, service name, 2-3 line description, "Learn More" link.

### 5. Expertise Section (py-32)
Split layout: 60/40. Left - Large impactful project image. Right - Stacked content blocks explaining methodology, approach, certifications.

### 6. Client Testimonials (py-24)
Two-column testimonial cards with client logos, quotes in Cormorant italic, client names and titles. Maintain elegant spacing between cards.

### 7. Process Timeline (py-32)
Horizontal timeline with 5 stages. Each stage: Number, title, brief description. Connected by subtle line graphic.

### 8. Team Section (py-24)
Grid of key team members: Professional headshots, names, titles, brief bios (expand on click).

### 9. Awards & Recognition (py-20)
Logo grid of industry recognitions, publications, certifications. 4-5 columns desktop, auto-adjust mobile.

### 10. Contact CTA Section (py-32)
Split: Left - Contact form (name, email, project type, message). Right - Office information, phone, email, business hours. Include map embed option.

### 11. Footer (py-16)
Three-column: Company info + brief statement, Quick links (Projects, Services, About, Contact), Social media icons. Copyright and privacy links at bottom.

## Component Library

**Navigation**: Fixed header with logo left, menu items right, ghost button for "Schedule Consultation". On scroll: subtle blur background.

**Project Cards**: Hover state reveals overlay with project name, category, view details button with blur background.

**Buttons**: 
- Primary: Solid with blur backdrop when on images
- Ghost: Border-only for secondary actions
- Text Links: Underline on hover, elegant transition

**Form Elements**: Minimal borders, focus states with subtle highlight, generous padding (py-3, px-4)

**Section Dividers**: Subtle horizontal rules with generous margin (my-32) or asymmetric layout breaks

## Images Strategy

**Hero Image**: Full-screen (100vh) luxury interior project - ideally a sophisticated healthcare or senior living space showcasing IDBH's high-end work. Professional photography essential.

**Project Gallery Images**: 6-8 high-resolution interior photography shots across different project types. Mix of wide establishing shots and detail closeups.

**Expertise Section Image**: Large-scale dramatic interior shot (60% viewport width)

**Team Headshots**: Professional portraits, consistent lighting/background treatment

**All images**: High-quality, professional photography only. Maintain consistent editing style - sophisticated, muted tones aligning with dark palette concept.

## Interactions & Animations
**Minimal & Purposeful**:
- Smooth scroll behavior throughout
- Fade-in on scroll for section reveals (subtle, not jarring)
- Image hover scale (1.0 to 1.05) on project cards
- Navigation menu slide-in for mobile

**Avoid**: Parallax effects, carousel auto-play, excessive motion

## Accessibility
- Maintain 4.5:1 contrast ratios minimum
- Focus indicators on all interactive elements
- Alt text for all project images with descriptive details
- Keyboard navigation throughout
- Form labels and error states clearly defined