# PRD — Andro Personal Portfolio Landing Page

**Version:** 1.1.0  
**Status:** Ready for Development  
**Product type:** Single-page personal CV / portfolio website  
**Design direction:** Brutalist / Neo-Brutalist  
**Primary stack:** HTML5, CSS3, Bootstrap 5.3.x, Vanilla JavaScript  
**Deployment target:** GitHub Pages or another free static hosting provider

---

## 1. Product Overview

### 1.1 Background

This project is a personal portfolio landing page that presents the owner's profile, education, skills, selected projects, and contact links. It is also intended to fulfill a university assignment requiring a responsive CV website built using Bootstrap and published publicly on the internet.

### 1.2 Product Vision

Create a distinctive, bold, readable personal website that presents its owner as an Informatics Engineering student interested in software development, mobile applications, and UI/UX design.

The website should feel intentionally designed—not like a generic portfolio template—while remaining usable, responsive, accessible, and straightforward to maintain.

### 1.3 Goals

- Present the owner's profile as a digital CV.
- Showcase real skills, education, and selected projects.
- Use Bootstrap for responsive layout and UI components.
- Apply a consistent Brutalist design system.
- Work across mobile, tablet, and desktop viewports.
- Publish a publicly accessible URL without requiring login.
- Keep the implementation simple enough to understand and maintain.

### 1.4 Non-Goals

The first release will not include:

- Backend or database.
- Authentication or user accounts.
- Admin dashboard or CMS.
- Blog management system.
- E-commerce or payments.
- A server-side contact form.
- React, Vue, Angular, or another frontend framework.
- Complex animation systems or unnecessary dependencies.

---

## 2. Target Audience and User Needs

### Primary audiences

- Lecturer evaluating the university assignment.
- Recruiters and technology companies.
- Developers, collaborators, and professional contacts.
- Visitors who want to learn about the owner's background and work.

### User needs

Visitors should be able to:

1. Understand who the owner is within a few seconds.
2. Identify the owner's interests and technical skills.
3. Browse selected projects and open valid project links.
4. Find contact and professional profile links easily.
5. Navigate the website comfortably on mobile and desktop.

---

## 3. Scope and Information Architecture

The product is a **single-page landing page**. All primary content lives in `index.html`; navigation uses anchor links to sections on the same page.

### Required sections and order

1. Navigation bar
2. Hero / introduction
3. About me
4. Skills and technology stack
5. Selected projects
6. Education / learning journey
7. Contact call-to-action
8. Footer

### Navigation

Suggested navigation labels:

- Home
- About
- Skills
- Projects
- Education
- Contact

Each link must point to a real section ID. On small screens, use a collapsible Bootstrap navbar.

---

## 4. Functional Requirements

### FR-01 — Navigation

**Priority:** Must have

- Use Bootstrap Navbar or equivalent Bootstrap components/utilities.
- Show a text-based name or personal monogram.
- Link to the correct section anchors.
- Provide a functional mobile navigation toggle.
- Keep keyboard focus visible.
- Do not include dead links or controls.

### FR-02 — Hero

**Priority:** Must have

Include:

- Owner's name or preferred name.
- Short professional headline.
- One or two sentences of introduction.
- Primary CTA: “View Projects”.
- Secondary CTA: “Contact Me”.
- A distinctive graphic treatment, such as oversized typography, a geometric shape, a sticker-like badge, or a framed portrait.

Example headline:

> BUILDING DIGITAL THINGS.  
> LEARNING BY SHIPPING.

Use this as placeholder copy only; refine it to match the owner's real identity and goals.

### FR-03 — About

**Priority:** Must have

Include a concise introduction, current study program, interests, and professional learning goals. Do not fabricate work experience, clients, achievements, or credentials.

### FR-04 — Skills and Tech Stack

**Priority:** Must have

Group actual skills into clear categories, for example:

- Programming
- Web development
- Mobile development
- UI/UX design
- Tools and workflow

Potential items include Kotlin, HTML, CSS, JavaScript, Bootstrap, Figma, Git, and GitHub, but only list technologies the owner is comfortable representing as current skills. Learning-stage skills should be labelled honestly.

### FR-05 — Selected Projects

**Priority:** Must have

Each project card should contain:

- Project name.
- Short description.
- Technologies used.
- Screenshot or thumbnail when available.
- Repository link if public.
- Live demo link if available.

Do not invent links. Hide buttons for unavailable repositories or demos. Student and practice projects are acceptable when described accurately.

### FR-06 — Education / Learning Journey

**Priority:** Must have

Include institution, study program, and current status. Add dates or additional education only when verified.

### FR-07 — Contact

**Priority:** Must have

Provide available contact options such as email, GitHub, or LinkedIn. Use `mailto:` for email. A backend or contact form is not required.

### FR-08 — Footer

**Priority:** Must have

Include owner name/monogram, copyright, and valid social links. A back-to-top link is optional.

### FR-09 — Responsive layout

**Priority:** Must have

- Support viewport widths starting at 320 px.
- Use Bootstrap's responsive grid and utilities.
- Prevent horizontal overflow.
- Ensure text and controls remain readable and usable.
- Adapt large display typography on small screens.

### FR-10 — Public deployment

**Priority:** Must have

- Deploy to GitHub Pages or another free static host.
- Website must open through a public URL without authentication.
- Verify all assets and links on the deployed website.
- Use HTTPS where provided by the host.

---

## 5. Design System — Brutalist / Neo-Brutalist

### 5.1 Design direction

**Style:** Contemporary Brutalism / Neo-Brutalism  
**Personality:** Bold, raw, expressive, graphic, direct  
**Principles:**

- Strong, high-contrast color blocking.
- Oversized, unapologetic typography.
- Visible thick borders.
- Hard, offset shadows rather than soft floating shadows.
- Square or minimally rounded corners.
- Grid-driven composition with intentional asymmetry.
- Clear labels, numbers, and editorial-style section headings.
- Playful visual details that never obstruct the content.

The result should feel bold and experimental while still being professional enough for an academic portfolio.

Avoid turning every element into a decoration. Keep the hierarchy clear, spacing consistent, and body text easy to read.

### 5.2 Color tokens

Use CSS custom properties for all design tokens.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F5F0E8` | Warm off-white page background |
| `--color-text` | `#171717` | Main text |
| `--color-surface` | `#FFFFFF` | Cards and content panels |
| `--color-primary` | `#D7FF3F` | Acid-lime highlight and primary actions |
| `--color-secondary` | `#FF5C35` | Orange-red accent |
| `--color-accent` | `#7657FF` | Purple accent for limited highlights |
| `--color-border` | `#171717` | Thick outlines |
| `--color-muted` | `#5C5C5C` | Secondary text |
| `--color-dark-panel` | `#171717` | Inverted panels |
| `--color-dark-panel-text` | `#F5F0E8` | Text on dark panels |

Usage rules:

- Keep warm off-white as the main canvas.
- Use black for text and borders.
- Use acid lime as the main highlight color.
- Use orange-red and purple sparingly as secondary accents.
- Verify text contrast, especially on accent backgrounds.
- Never rely on color alone to communicate status.

### 5.3 Typography

Preferred display font: **Space Grotesk**.  
Body font: **Inter** or a system sans-serif fallback.  
Fallback stack: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

Typography principles:

- Hero heading should be large, bold, uppercase or near-uppercase.
- Use compact line-height for display headings.
- Use readable body text with comfortable line-height.
- Use uppercase labels and small metadata where appropriate.
- Use monospaced text sparingly for tags, indices, or technical labels.
- Do not use too many font families or weights.

Suggested scale:

| Token | Suggested size | Usage |
|---|---|---|
| Display | `clamp(2.8rem, 9vw, 7rem)` | Hero heading |
| H1 | `clamp(2.3rem, 6vw, 4.5rem)` | Major page headings |
| H2 | `clamp(1.8rem, 4vw, 3rem)` | Section headings |
| H3 | `1.25rem–1.5rem` | Card headings |
| Body | `1rem–1.125rem` | Main copy |
| Small | `0.875rem` | Metadata |
| Label | `0.75rem–0.8125rem` | Eyebrows and tags |

Use `clamp()` for responsive display typography.

### 5.4 Spacing tokens

Use a 4 px base scale:

| Token | Value |
|---|---:|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-24` | 96px |

Suggested section spacing: 72–112 px on desktop and 48–72 px on mobile.

### 5.5 Layout and grid

- Use Bootstrap `.container`, `.row`, and `.col-*` for the main layout.
- Use a maximum content width of approximately 1200 px.
- Use asymmetry intentionally, not randomly.
- Hero can use a two-column desktop layout and a stacked mobile layout.
- Projects can use a three-column desktop grid, two columns on tablet, and one column on narrow mobile.
- Section headings may include large numeric indices such as `01 / ABOUT`.
- Keep a consistent alignment system across sections.
- Prevent decorative elements from causing horizontal overflow.

Bootstrap must be used meaningfully for layout and responsive behavior; custom CSS should define the Brutalist visual identity.

### 5.6 Borders and corner radius

| Token | Value | Usage |
|---|---:|---|
| `--border-width` | 2px | Standard outline |
| `--border-width-strong` | 3px | Featured panels |
| `--radius-sm` | 0px | Buttons, tags, most cards |
| `--radius-md` | 2px | Optional subtle variation |

Square corners are the default. Avoid the conventional soft, rounded SaaS-card look.

### 5.7 Hard shadows

Use offset, solid shadows rather than blurred shadows.

Example:

`box-shadow: 6px 6px 0 var(--color-text);`

Smaller interactive elements may use:

`box-shadow: 4px 4px 0 var(--color-text);`

For hover states, a button or card may shift slightly toward its shadow. Keep interaction feedback consistent and respect reduced-motion settings.

### 5.8 Buttons and links

Primary button:

- Acid-lime background.
- Black text.
- 2 px black border.
- Square corners.
- Hard offset black shadow.
- Bold, high-contrast label.
- Minimum touch target around 44 × 44 px.

Secondary button:

- Warm off-white or white background.
- Black text and border.
- Same hard-shadow language.

Hover and active states:

- Use clear color inversion or a small offset shift.
- Provide visible keyboard focus.
- Do not rely on hover alone to reveal important information.

### 5.9 Cards and panels

Project cards and content panels should use:

- White or accent-color backgrounds.
- Visible black borders.
- Square corners.
- Hard offset shadows on featured cards.
- Clear title, description, tags, and action hierarchy.
- Consistent internal spacing.

Do not add hard shadows to every element if doing so makes the interface visually noisy. Reserve the strongest treatment for key elements.

### 5.10 Graphic elements

Optional visual details:

- Large numbered section markers.
- Sticker-like labels.
- Crosshair or plus-sign motifs.
- Geometric blocks.
- Monogram logo.
- Dotted or grid backgrounds used sparingly.
- Framed project thumbnails.

Decorative elements must not obscure text, create accessibility issues, or break mobile layouts.

### 5.11 Motion

Keep animation minimal and purposeful:

- Button press/hover feedback.
- Small card movement.
- Mobile navbar collapse.
- Optional restrained reveal effects.

Target duration: 120–220 ms for micro-interactions. Respect `prefers-reduced-motion`. Core content must be visible and usable without animation.

---

## 6. Technical Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Design system and custom styling |
| Bootstrap 5.3.x | Responsive grid, navbar, utilities, and components |
| Bootstrap Icons | Icons when useful |
| Vanilla JavaScript (ES6+) | Small interactions |
| Git | Version control |
| GitHub | Repository |
| GitHub Pages | Static hosting |

### Implementation rules

- Use vanilla JavaScript; no frontend framework is needed.
- No backend, database, or authentication.
- Load a pinned compatible Bootstrap 5.3.x CSS and JS bundle.
- Use Bootstrap layout utilities and responsive components in actual markup.
- Keep custom styles in `css/style.css`.
- Keep custom JavaScript in `js/main.js`.
- Store design tokens in `:root` CSS custom properties.
- Avoid unnecessary dependencies and inline styles.
- External fonts and icons must have sensible fallbacks.

---

## 7. Project Structure

```text
personal-portfolio/
├── index.html
├── PRD.md
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    │   ├── profile.webp
    │   ├── project-01.webp
    │   └── project-02.webp
    └── icons/
        └── favicon.svg
```

Only create asset files when needed. If no profile image is available, use a designed monogram or abstract geometric composition rather than a broken image.

---

## 8. Responsive Requirements

### Mobile: 320–575 px

- Stack hero content vertically.
- Keep heading within viewport.
- Use collapsible navbar.
- Stack project cards in one column.
- Ensure buttons and links have touch-friendly hit areas.
- Avoid clipped borders, shadows, and decorative elements.
- No horizontal page scrolling.

### Tablet: 576–991 px

- Use Bootstrap responsive grid.
- Allow two-column project layouts where appropriate.
- Maintain heading hierarchy and generous spacing.

### Desktop: 992 px and above

- Hero may use a two-column layout.
- Projects may use three columns.
- Use asymmetry in controlled, grid-aligned compositions.
- Keep content within the maximum layout width.

Test at 320, 375, 768, 1024, and 1440 px.

---

## 9. Accessibility

- Use semantic landmarks and logical heading hierarchy.
- Provide meaningful alt text for informative images.
- Use empty alt text for purely decorative images.
- Make all navigation and controls keyboard accessible.
- Provide visible focus indicators.
- Maintain readable contrast on all color combinations.
- Ensure labels remain understandable without color.
- Add accessible names to icon-only links.
- Set the correct page language.
- Respect `prefers-reduced-motion`.
- Do not use animations or asymmetrical layouts that obstruct reading.

Aim to follow relevant WCAG 2.2 AA principles for contrast, keyboard use, and content structure.

---

## 10. SEO and Metadata

Include:

- Descriptive page title.
- Meta description.
- UTF-8 character encoding.
- Responsive viewport metadata.
- Favicon or monogram icon if available.
- Semantic headings and descriptive links.
- Appropriate image alt attributes.

Suggested title:

`Andro — Personal Portfolio`

Suggested description:

`Personal portfolio of an Informatics Engineering student interested in software development, mobile applications, and UI/UX design.`

Adjust metadata to reflect the final content.

---

## 11. Performance

- Compress project thumbnails and use WebP where practical.
- Specify image dimensions or aspect ratios.
- Lazy-load below-the-fold images.
- Avoid heavy animation libraries.
- Avoid autoplay video and unnecessary scripts.
- Keep external dependencies limited.
- Ensure content remains readable if optional external fonts fail.
- Target Lighthouse Performance 90+ under representative conditions when practical; this is a goal, not a guarantee.

---

## 12. Content and Privacy

Use accurate personal details only.

Required content:

- Preferred name or full name.
- Education and program.
- Brief introduction.
- Skills and learning areas.
- Selected projects.
- Available contact links.

Optional content:

- Profile image.
- Personal logo.
- Certificates.
- Achievements.
- Experience.
- Learning journey.

Never invent employment, clients, awards, qualifications, or project links. Do not publish sensitive personal information, home address, identity numbers, credentials, or private academic records. Replace placeholders before deployment.

---

## 13. Deployment

### Preferred platform: GitHub Pages

1. Create a GitHub repository.
2. Add `index.html`, CSS, JavaScript, and assets.
3. Keep `index.html` in the repository root.
4. Open repository Settings → Pages.
5. Choose the branch and root folder as the publishing source.
6. Save and wait for the deployment.
7. Open the public URL.
8. Test links, assets, responsive layout, and HTTPS.

Alternative static hosting platforms such as Netlify or Cloudflare Pages are acceptable.

Do not consider deployment complete until the public URL has been tested without login, including on a mobile viewport.

---

## 14. QA Checklist

### Functional

- [ ] Navbar anchors point to the correct sections.
- [ ] Mobile navbar opens and closes.
- [ ] CTA buttons work.
- [ ] Project links are valid or omitted.
- [ ] Email link works when provided.
- [ ] No dead buttons or fake links.

### Visual

- [ ] Brutalist design language is consistent.
- [ ] Thick borders and hard shadows are used intentionally.
- [ ] Typography hierarchy is clear.
- [ ] Accent colors remain readable.
- [ ] Layout has no unintended overflow.
- [ ] Mobile design is deliberate, not just compressed desktop UI.

### Technical

- [ ] Bootstrap is used meaningfully.
- [ ] CSS and JavaScript files load correctly.
- [ ] No broken images or internal anchors.
- [ ] No major console errors.
- [ ] No horizontal overflow at required widths.
- [ ] Reduced-motion preference is respected.

### Submission

- [ ] Website is published publicly.
- [ ] URL works without authentication.
- [ ] Website is tested from the deployed URL.
- [ ] Screenshot evidence is prepared.
- [ ] Provide JPG for a single page or PDF if required for multiple pages, following the lecturer's instructions.

---

## 15. Acceptance Criteria

The project is complete when:

- [ ] It is a single-page CV / portfolio landing page.
- [ ] All required sections are present.
- [ ] Bootstrap 5.3.x is used for layout and responsiveness.
- [ ] Brutalist design tokens and components are applied consistently.
- [ ] Personal information is accurate and organized.
- [ ] It works at mobile, tablet, and desktop sizes.
- [ ] Navigation and available project/contact links work.
- [ ] No critical layout issues or broken assets remain.
- [ ] The website is publicly deployed and requires no login.
- [ ] Submission evidence is ready.

---

## 16. Development Phases

### Phase 1 — Foundation
- Create the project structure.
- Set up Bootstrap and metadata.
- Define CSS tokens.
- Build semantic section scaffolding.

### Phase 2 — Main UI
- Build navbar and hero.
- Build About and Skills.
- Build project cards.
- Build Education, Contact, and Footer.

### Phase 3 — Brutalist styling
- Apply high-contrast palette.
- Add typography scale, thick borders, and hard shadows.
- Refine grid and asymmetry.
- Add restrained interactions.

### Phase 4 — Responsive QA
- Test mobile, tablet, and desktop.
- Fix overflow and accessibility issues.
- Verify links and assets.

### Phase 5 — Deployment
- Publish the site.
- Test the public URL.
- Capture screenshots or PDF evidence.

Prioritize completion, readability, and reliable deployment over decorative complexity.

---

## 17. Definition of Done

The website is ready for submission when the source code is organized, the design system is consistently applied, the content is accurate, Bootstrap is used meaningfully, responsive and accessibility checks are complete, and the public deployment URL works without login.

**Final deliverables:**
1. Source code.
2. Public website URL.
3. Screenshot or PDF evidence as required by the assignment.
