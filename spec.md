# True Colors Care Fund

## Current State
The site has 5 pages (Home, Donate, Get Help, Guidelines, Contact) with a trans flag color scheme. The backend is an empty Motoko actor. The Home page has a hero, Our Story, Values, and CTA sections.

## Requested Changes (Diff)

### Add
- Backend: `recordVisit()` update call that increments a persistent visit counter
- Backend: `getVisitCount()` query call that returns the current count as Nat
- Home page: visitor counter strip at the bottom of the page, showing "Total Visits: ####" in trans flag colors (light blue, pink, white), small and mobile-friendly
- Counter auto-increments on each page load by calling `recordVisit()`

### Modify
- `src/backend/main.mo` — add visit counter logic
- `src/frontend/src/pages/Home.tsx` — add VisitorCounter component at the bottom

### Remove
- Nothing

## Implementation Plan
1. Update `main.mo` with stable var visitCount and recordVisit/getVisitCount functions
2. Regenerate `backend.d.ts` bindings
3. Add VisitorCounter section to Home.tsx that calls recordVisit on mount and displays getVisitCount result
