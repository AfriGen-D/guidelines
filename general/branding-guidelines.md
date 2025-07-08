# Branding & Versioning Guidelines

## Purpose

These guidelines are designed to ensure a consistent, professional, and user-centered experience across all aspects of the AfriGen-D Portals. They cover visual identity, tone, content and formatting. The aim is to strengthen the portals visibility and credibility as a reliable resource for African data.

## Branding Guidelines

### 1. Logo

- **Primary Logo**: The full afrigen-D logo must be used on the top-left corner of all pages.
- **Minimum Size**: The logo must never appear smaller than 100px wide.
- **Spacing**: Leave at least 20px of clear space around the logo.
- **Modifications**: Never modify the logo's colors, proportions, or orientation.

### 2. Color Palette

| Name                      | Hex Code | Usage                           |
|---------------------------|----------|---------------------------------|
| Light saturated yellow    | `#ffc107`| Links, buttons                  |
| African Green             | `#005303`| Navigation bars, headers        |
| Black                     | `#000000`| Footer                          |
| White                     | `#FFFFFF`| Main page background            |
| Alert Red                 | `#D9534F`| Error/notification messages     |

### 3. Typography

- **Primary font:** `Open Sans`, fallback: `Arial, Helvetica, sans-serif`
- **Headings:** Bold, properly nested using `<h1>` to `<h4>`
- **Body text:** Regular weight, `16px`
- **Code/Data:** Use `monospace` fonts

### 4. Imagery

- Avoid generic, non-contextual stock images.
- Provide descriptive `alt` text for accessibility.

## Content Style & Tone

- **Voice:** Scientific, professional, and inclusive.
- **Audience:** Researchers, clinicians, students, policymakers.
- **Language:** English first.
- **Content Do's:**
  - Use verified data
  - Cite sources
  - Keep messages concise
- **Content Don'ts:**
  - Avoid speculation
  - No technical jargon without explanation

## 5. Structural Rules

### 5.1 URL Structure

- Use **lowercase**, **hyphenated** slugs.  
  Example: `/submit-data` instead of `/SubmitData`.

### 5.2 Main Menu Items

Must include:
- `Home`
- `About`
- `Browse Data`
- `Help`

### 5.3 Accessibility Standards

- Use semantic HTML (`<header>`, `<main>`, etc.).
- Maintain color contrast ratios.

## 6. Versioning Strategy

We use [Semantic Versioning](https://semver.org/):  
`MAJOR.MINOR.PATCH` (e.g., `v2.1.0`)

| Level   | Description                                         |
|---------|-----------------------------------------------------|
| MAJOR   | Incompatible changes (e.g., database overhaul)      |
| MINOR   | Backward-compatible new features                    |
| PATCH   | Bug fixes, copy edits, or visual adjustments        |

### 6.1 Release Naming

- Use Git tags in the format: `vX.Y.Z`
- Maintain a changelog (`CHANGELOG.md`) for each release.

### 6.2 Sample Changelog Entry

```markdown
## [v2.0.0] – 2025-07-01
### Added
- New search filters for disease categories
- Senegal genomic dataset
### Fixed
- UI misalignment in table view
```

## 7. Integration with External Projects

For embedded tools:
- Use official logos and styling from each partner.
- Link to the original project pages.
- Track their API versions in your own changelog.
