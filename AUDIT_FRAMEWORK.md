# Systematic UI Audit Framework

This framework standardizes how to evaluate experiences across eight core dimensions and report findings in a five-part format that produces actionable, measurable recommendations.

## Audit Dimensions
For each area, capture observations, quantify where possible, and note evidence (screens, component names, URLs).

1. **Visual Hierarchy**
   - Check information prominence (layout, weight, contrast, proximity).
   - Verify primary actions are visually distinct vs. secondary actions.
   - Measure alignment and consistency across breakpoints.
2. **Color**
   - Validate palette usage and token mapping (primary/secondary/background/feedback states).
   - Record contrast ratios (target ≥ 4.5:1 for body text, ≥ 3:1 for large text or UI icons) and document any failures.
   - Confirm semantic usage (e.g., success vs. warning) and state transitions (hover/focus/active/disabled).
3. **Typography**
   - Inventory font stacks and weights; check line-height (1.4–1.6 for paragraphs) and letter spacing for readability.
   - Ensure heading scales step consistently (e.g., 1.25–1.33 modular scale) and avoid mixing more than 2–3 families.
4. **Spacing**
   - Verify use of the spacing scale (e.g., 4/8px base increments) and consistent padding/margins between related elements.
   - Check grid/gutter alignment and whitespace balance on key templates (home, PDP, checkout, CMS pages).
5. **Components**
   - Audit buttons, inputs, cards, modals, nav, banners, and form controls for consistency of states, padding, radius, and shadows.
   - Confirm component variants use shared tokens and observe real data edge cases (long labels, error states).
6. **Accessibility (WCAG)**
   - Test focus order, focus visibility, and keyboard operability.
   - Confirm ARIA labels/roles for form inputs, icons, toggles; ensure form errors are programmatically associated.
   - Check media alternatives (alt text/captions), motion/animation prefers-reduced-motion support, and error messaging clarity.
7. **Brand Cohesion**
   - Evaluate alignment to brand foundations (color, type, iconography, tone, illustration style).
   - Confirm recurring patterns (CTA shapes, elevation, corner radii) are uniform across pages and components.
8. **UX & Conversion Optimization**
   - Review navigation clarity, findability, and friction points on primary flows (add-to-cart, checkout, sign-up, search, filters).
   - Capture microcopy efficacy, trust signals, social proof placement, and empty/error state guidance.
   - Measure speed-to-action (number of steps/clicks), form completion friction, and mobile ergonomics (thumb reach).

## Five-Part Response Format
Provide every audit in the following structure to maintain consistency and actionability:

1. **Overview** — Brief context (page/app scope, environment, date, devices, breakpoints reviewed, tools used for contrast/linting).
2. **Strengths** — Bulleted positives by dimension, referencing evidence (screens/URLs).
3. **Issues & Opportunities** — Concise problem statements grouped by dimension; include severity (blocker/major/minor) and evidence.
4. **Recommendations** — Numbered, prioritized fixes. Each item includes the dimension, specific remedy, measurable target, and owner if known.
5. **Scorecard** — Table summarizing the eight dimensions with a 1–5 rating (1 = critical risk, 5 = exemplary), key rationale, and pass/fail flags for WCAG AA contrast and keyboard/focus.

## Measurable Updates & Repairs
Use concrete, testable targets so fixes can be validated:

- **Contrast ratios:** Text/icons meet WCAG AA (≥ 4.5:1; ≥ 3:1 for 18pt+ or 14pt bold). Document measured ratios per component/state.
- **Touch targets:** Minimum 44px (or 11mm) square on touch devices; 48px preferred for primary CTAs.
- **Spacing values:** Base spacing scale in 4px/8px increments; define vertical rhythm (e.g., paragraph spacing = 1× line-height, section spacing = 3–4× base spacing).
- **Typography:** Maintain consistent font stacks; heading steps follow defined scale; body text ≥ 16px with 1.4–1.6 line-height.
- **Components:** Standardize padding, radius, and state styling per component family (e.g., buttons 12–16px vertical padding, 8–16px radius, hover/focus outlines ≥ 2px with 3:1 contrast).
- **Form UX:** Inline errors and helper text adjacent to inputs; required fields clearly marked; descriptive labels, not placeholders alone.
- **Motion:** Provide `prefers-reduced-motion` fallbacks; avoid parallax/auto-play when user prefers reduced motion.
- **Performance/UX:** Limit primary flow steps; surface progress indicators; ensure critical actions are above the fold on mobile.

## Scorecard Template
Use this template verbatim in reports:

| Dimension | Rating (1–5) | Key Evidence | WCAG/Usability Flags |
|-----------|--------------|--------------|----------------------|
| Visual Hierarchy |  |  |  |
| Color |  |  |  |
| Typography |  |  |  |
| Spacing |  |  |  |
| Components |  |  |  |
| Accessibility (WCAG) |  |  |  |
| Brand Cohesion |  |  |  |
| UX & Conversion |  |  |  |

- Add a brief legend under the table: **1 = critical**, **2 = major**, **3 = moderate**, **4 = solid**, **5 = exemplary**; include WCAG AA pass/fail and keyboard/focus pass/fail.
- Attach screenshots or URLs for every moderate/major issue and show before/after comparisons where fixes were applied.

## Usage Notes
- Always include the five-part structure in audit outputs.
- Where fixes are applied, record the measurable parameter (e.g., "Updated primary button contrast to 7.1:1", "Expanded touch target to 48px", "Aligned section spacing to 32px").
- Validate with automated tools (axe, Lighthouse, color contrast checkers) plus manual keyboard testing; capture scores in the Overview and Scorecard.

