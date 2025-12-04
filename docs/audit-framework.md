# UX/UI Audit Framework

This framework standardizes audits across eight dimensions and enforces a five-part reporting format so findings are actionable and consistently communicated.

## Eight-Dimension Audit Checklist
1. **Visual Hierarchy**
   - Verify clear primary/secondary actions; ensure CTA prominence via size, weight, and placement.
   - Use consistent heading scales (e.g., H1 32–40px, H2 26–32px, H3 20–24px) and logical nesting.
   - Confirm alignment grids are followed and avoid competing focal points.
2. **Color**
   - Validate brand palette usage and limit neutrals/accents to defined tokens.
   - Check contrast ratios: text/non-text vs. backgrounds meet WCAG AA (≥4.5:1 body, ≥3:1 large text/icons), AA Large (≥3:1), and AAA targets where feasible.
   - Flag improper state colors (hover, focus, error/success) and insufficient color-only communication.
3. **Typography**
   - Confirm font families, weights, and sizes adhere to the type scale; restrict to approved weights (e.g., 400/500/600/700).
   - Check line height (1.4–1.6 for body), letter spacing, and paragraph spacing for readability.
   - Ensure truncation, wrapping, and responsive breakpoints avoid orphaning or overflow.
4. **Spacing**
   - Enforce an 8px spacing system (or project token scale) for padding/margins/gaps.
   - Maintain consistent vertical rhythm between sections (e.g., 24–40px blocks, 16–24px intra-section).
   - Verify grid gutters and columns align with the layout (e.g., 12-col, 16–24px gutters).
5. **Components**
   - Audit buttons, inputs, cards, navigation, and modals for consistency in states, radii, shadows, and icon sizing.
   - Confirm touch target sizes ≥44x44px and hit area padding is preserved across devices.
   - Check content density, truncation patterns, and skeleton/loading usage.
6. **Accessibility (WCAG)**
   - Confirm focus states are visible (≥3:1 contrast) and keyboard traversal order is logical.
   - Provide text alternatives for media; ensure form labels/ARIA associations and error messaging.
   - Validate motion preferences, reduced motion fallbacks, and semantic HTML structure.
7. **Brand Cohesion**
   - Align with tone of voice, imagery style, iconography, and microcopy conventions.
   - Ensure logo usage, spacing, and capitalization follow the brand system.
   - Verify token usage (colors/type/spacing) matches the design system without drift.
8. **UX & Conversion Optimization**
   - Review clarity of value proposition, primary CTA placement, and friction points (form length, field grouping).
   - Assess heuristic adherence: recognition over recall, progressive disclosure, error prevention, and trust signals.
   - Monitor key metrics: time-to-CTA visibility, completion rates, abandonment, and surface quick wins (e.g., autofill, defaulting, inline validation).

## Five-Part Response Format
Each audit or review should be delivered using this consistent structure:
1. **Overview** – 2–3 sentences summarizing scope, pages/screens reviewed, and overall health.
2. **Strengths** – Bulleted positives tied to evidence (e.g., "Header CTA contrast 5.2:1").
3. **Issues / Opportunities** – Numbered list with severity (Blocker/Major/Minor) and location references.
4. **Recommendations** – Paired to issues with specific fixes, owners, and measurable outcomes (e.g., "increase body text to 16px, line-height 1.5 to reach 4.8:1 contrast").
5. **Scorecard** – 0–5 ratings per dimension plus overall, with rationale in 1–2 bullets each.

## Specification for Actionable Recommendations
- **Measurable updates:** include target values (e.g., contrast ≥4.5:1; spacing multiples of 8px; tap targets ≥44px; modal close latency <100ms; focus ring 2px offset, 3:1 contrast).
- **Traceability:** map every recommendation to a screen/element identifier and WCAG criterion where applicable (e.g., 1.4.3, 2.4.7, 3.3.1).
- **Completion criteria:** define "done" per item (e.g., "Header H1 set to 36px/1.2, verified in Chrome/Firefox mobile and desktop," "Form error text uses token `error-600`, contrast 5.8:1").
- **Testing expectations:**
  - Visual regression or screenshot diffs for updated components.
  - Manual checks for focus order, keyboard traps, and screen reader labels.
  - Device matrix covering at least desktop (≥1280px) and mobile (375–430px) with pointer + touch interactions.
- **Reporting:** include before/after evidence (screenshots or token diffs) and a final scorecard update.

## Scorecard Template (0–5)
Use half points if needed; 5 = exemplary, 3 = acceptable, 0–2 requires remediation.

| Dimension | Criteria | Score | Rationale |
| --- | --- | --- | --- |
| Visual Hierarchy | Clarity of focal points, heading scale, CTA prominence |  |  |
| Color | Palette adherence, state colors, contrast compliance |  |  |
| Typography | Type scale usage, readability, responsiveness |  |  |
| Spacing | 8px rhythm, grid consistency, breathing room |  |  |
| Components | State completeness, density, consistency, touch targets |  |  |
| Accessibility (WCAG) | Focus, semantics, labels, motion, ARIA compliance |  |  |
| Brand Cohesion | Token alignment, imagery/iconography consistency, tone |  |  |
| UX & Conversion | Value clarity, friction reduction, heuristic alignment |  |  |
| **Overall** | Weighted blend of the above |  |  |

## Usage Example
- **Issue:** Form error text uses #D9534F on white (2.9:1). Severity: Major. Location: Checkout > Billing form > Error message.
- **Recommendation:** Swap to `error-800` (#C0352B) and raise font weight to 600; verify contrast 4.9:1 and 44px vertical spacing between fields. Owner: UI Dev. Done when snapshot updated and keyboard focus lands on error summary.
- **Scorecard:** Color 3.5/5 (improved contrast), Accessibility 4/5 (focusable summary added), Components 3/5 (field spacing updated).

