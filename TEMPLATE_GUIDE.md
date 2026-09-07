# Upscale AppLovin Creative OS — Icon-Structured Mobile Template

This is an original, mobile-first Upscale demo that preserves the section order and conversion mechanics of the paid-social landing page at `icon.com`. It does not copy Icon code, media, logos, or factual claims.

All bracketed copy is deliberately unresolved. Replace a bracketed field only after the underlying product, commercial, legal, customer, founder, investor, partner, or competitive input has been supplied and approved.

## Visual system

The implementation uses the current external Upscale deck as the visual reference:

| Role | Token |
| --- | --- |
| Display type | Albert Sans, 600–900 |
| Body type | Inter, 400–800 |
| Warm near-black | `#021A20` |
| Violet | `#831F80` |
| Cyan | `#00F0FF` |
| Indigo | `#26259D` |
| Teal | `#0A6D86` |
| Slate | `#35484D` |
| Paper | `#F6F6F6` |

The page keeps Icon’s neutral long-scroll silhouette, rounded card system, horizontal mobile rails, dark section changes, dual CTA paths, comparison table, and sticky mobile CTA. Upscale colors replace Icon’s accents.

## Exact 14-section sequence

| Order | Icon source module | Upscale placeholder adaptation |
| --- | --- | --- |
| 1 | The Agency hero | AppLovin Creative OS hero, two CTA paths, three evidence/risk lines, and two 9:16 creative slots |
| 2 | Gateway cards | Eight horizontally swipeable deep links |
| 3 | Formats | Four expandable format hypotheses with hooks, uses, and approved-asset slots |
| 4 | How it works | Seven steps with owner, timing, approval, billing, and output placeholders |
| 5 | Pricing | Entry, high-touch, and enterprise/partner engagement models plus scope and risk controls |
| 6 | Customers | Proof architecture with counts, quotes, results, windows, and attribution placeholders |
| 7 | Admaker 2.0 | Four AppLovin Creative OS module cards and UI-state placeholders |
| 8 | Us vs. Them | Eight-column comparison with a sticky first column and `[VERIFY]` cells |
| 9 | Founder Story | Verified history, outcome, insight, quote, attribution, and milestone placeholders |
| 10 | Investors | Approved investor/advisor proof grid |
| 11 | Partner Program | ICP, bounty, revenue share, qualification, payout, and post-format placeholders |
| 12 | Admaker 3.0 | Optional self-aware Creative OS 3.0 pricing beat |
| 13 | Explore more | Six high-intent deep links |
| 14 | Final CTA | Restates the chosen promise and both conversion paths |

## Five landing-page concepts

The complete 14-section template is available at five routes. Only the message frame changes; the section sequence does not.

| Concept | Route | Above-the-fold frame |
| --- | --- | --- |
| Product-led | `/concepts/product-led` | `[PRODUCT CATEGORY] FOR APPLOVIN CREATIVE` |
| Pain-led | `/concepts/pain-led` | `[PRIMARY PAIN], WITHOUT [CURRENT TRADEOFF]` |
| Outcome-led | `/concepts/outcome-led` | `[PRIMARY OUTCOME] FROM EVERY CREATIVE CYCLE` |
| Workflow-led | `/concepts/workflow-led` | `FROM [INPUT] TO [OUTPUT], IN ONE CREATIVE OS` |
| Proof-led | `/concepts/proof-led` | `[VERIFIED PROOF POINT] FOR [TARGET SEGMENT]` |

The root route uses the Product-led concept.

## CTA behavior

The short path appears in the header, hero, featured engagement card, final CTA, and sticky mobile bar. Its two fields remain `[FIELD 01]` and `[FIELD 02]` until the onboarding and consent requirements are supplied.

The high-touch path uses eight placeholder fields and remains separate from the short path, matching the source page’s dual-intent logic.

Both demo forms are local-only. They do not transmit data.

## Mobile mechanics

- Hero content and CTA choice appear before the first major section break.
- The first approved 9:16 creative slot is visible at the bottom of the opening viewport.
- Dense desktop grids become swipe rails with a visible next-card edge.
- Rails use native touch scrolling, hidden scrollbars, and scroll snapping.
- The seven workflow steps form a vertical timeline on narrow screens.
- The comparison table scrolls horizontally while the capability column stays fixed.
- The primary CTA remains available in a safe-area-aware sticky bottom bar.
- Neutral, dark, violet, cyan, indigo, and teal surfaces create the long-scroll rhythm.

## Required inputs before production

1. Approved category, audience, pain, outcome, mechanism, and CTA language
2. Approved creative formats, examples, media, and usage rights
3. Exact seven-step workflow, owners, timings, approvals, and billing trigger
4. Offer names, prices, cadence, deliverables, terms, and risk controls
5. Customer counts, quotes, results, test windows, samples, and attribution
6. Confirmed module capabilities, states, integrations, and limitations
7. Current competitor set, dimensions, capabilities, and pricing
8. Verified founder narrative, quote, title, and milestones
9. Approved investor/advisor names and relevance
10. Partner ICP, economics, qualification, payout, and legal terms
11. Privacy, consent, terms, analytics, and CRM/calendar routing

## Production checklist

- [ ] Replace every bracketed token with approved copy or remove the module
- [ ] Connect the short path to approved onboarding or authentication
- [ ] Connect the high-touch path to the approved CRM and calendar
- [ ] Add loading, error, retry, duplicate, and routed-success states
- [ ] Preserve first-touch and latest-touch attribution separately
- [ ] Link privacy, consent, terms, refund, and partner-program rules
- [ ] Compress approved 9:16 media to the agreed performance budget
- [ ] Load video only after an intentional play action
- [ ] Confirm 44×44 pixel touch targets and visible keyboard focus
- [ ] Test at 320, 375, 390, 430, 768, and 1024 pixels
- [ ] Re-verify every customer, commercial, founder, investor, partner, and competitor claim at publish time

## Source map

- Content schema: `content/icon-agency-template.ts`
- Shared Upscale placeholder content: `content/upscale-applovin-creative-os.ts`
- Five concept outlines: `content/upscale-concepts.json`
- Concept content adapter: `content/upscale-concepts.ts`
- Page renderer and interactions: `components/icon-agency-mobile-template.tsx`
- Brand tokens and fonts: `app/globals.css` and `public/fonts/`
