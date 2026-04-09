

# Advanced Tree Service — Premium Single-Page Website

## Overview
A cinematic, scroll-animated single-page website for a professional tree service company in Northeast Oklahoma. Modern design with white + forest green palette, Framer Motion animations throughout, and mobile-first responsive layout.

## Design System
- **Colors:** White (#FFFFFF) backgrounds, forest green (#15803D) primary, light green (#22C55E) hover states, near-black (#111827) headings, gray (#374151/#6B7280) body text
- **Typography:** Inter from Google Fonts. Hero 56-72px bold, sections 40-48px semibold, body 16-18px. Green uppercase micro-labels above each section heading.
- **Animations:** Framer Motion scroll-triggered fade-in/slide-up on all sections with stagger. Parallax hero background. Number counter animations. Hover micro-interactions on cards, buttons, and nav links.

## Components & Sections (10 total)

1. **Navbar** — Sticky with backdrop-blur, typographic branding with Lucide tree icon, anchor links with green underline hover animation, green "Get a Free Quote" CTA button, mobile hamburger with full-screen overlay

2. **Hero** — Full viewport, split layout (55/45). Bold two-line headline, subheadline, dual CTAs (solid green + outlined). Right side: tilted image placeholder with shadow and floating "Serving NE Oklahoma" badge. Subtle dot grid texture background.

3. **Trust Bar** — Compact ribbon with 4 animated stat counters (500+ Projects, 15+ Years, 100% Insured, 24hr Emergency). Count-up animation on scroll.

4. **Services** — 5 cards in responsive grid (3-col desktop, 2-col tablet, 1-col mobile). Each with green icon circle, title, description, "Learn More →" link. Hover lift + green glow. Staggered scroll reveal.

5. **Project Gallery** — Masonry/grid layout (3/2/1 columns responsive), 6-8 placeholder image containers. Hover: zoom + dark overlay with white text label. "View All Projects →" link below.

6. **Why Choose Us** — Split layout with parallax image left, 4 differentiator rows right (icon + title + description). Shield, Clock, Award, Users icons.

7. **Testimonials** — Auto-advancing carousel (5s interval) with manual arrows and dots. Cards with decorative green quote mark, italic text, client name/location, 5 green stars. 4 testimonials from NE Oklahoma cities.

8. **Service Area** — Two-column city list with green bullets (16 cities) + stylized Oklahoma SVG/map placeholder with NE region highlighted green.

9. **Contact/CTA** — Bold CTA section with phone, email, hours. Green radial glow background accent. Prominent "Request a Quote" button.

10. **Footer** — Dark charcoal (#111827) background. Branding + tagline, quick anchor links, contact info, copyright, privacy/terms links.

## Technical Approach
- Each section as its own React component for clean architecture
- Framer Motion for all animations (useInView, motion components, AnimatePresence for carousel)
- Custom useCountUp hook for stat counter animations
- Intersection Observer via Framer Motion's whileInView
- Smooth scroll via CSS `scroll-behavior: smooth` + programmatic scrolling for nav links
- Lucide React icons exclusively
- Fully responsive with Tailwind breakpoints
- Google Fonts Inter import in index.html

