# Task: Code Cleanup and Organization

## Classification
- **Type**: COMPLEX CODE / REFACTOR
- **Priority**: High (User requested general cleanup and organization)
- **Status**: ANALYSIS

## Goals
1. **DRY (Don't Repeat Yourself)**: Centralize common styles (like `masterButtonStyle`) and UI patterns.
2. **SRP (Single Responsibility Principle)**: Break down massive components into smaller, more manageable sub-components.
3. **Organization**: Create a dedicated `components/ui` folder for reusable UI elements and a `config` folder for constants.
4. **Linting**: Correct unused variables and improve type safety (replace `any`).
5. **Code Hygiene**: Remove commented-out code and unnecessary comments.

## Phase 1: Preparation & Infrastructure
- [ ] Create `src/constants/links.ts` for centralizing all platform/social URLs.
- [ ] Create `src/components/ui/MasterButton.tsx` to centralize the premium industrial button style.
- [ ] Create `src/components/ui/SectionHeader.tsx` for consistent section titling.
- [ ] Create `src/components/ui/FeatureItem.tsx` for the icon+text blocks.

## Phase 2: Refactoring Core Sections
### StrategicSolutions.tsx
- [ ] Extract tab logic into sub-components.
- [ ] Extract pricing plans into a separate data object or component.
- [ ] Implement `MasterButton` and `FeatureItem`.

### EliteRewards.tsx
- [ ] Extract ranking table into `RankingTable.tsx`.
- [ ] Extract plaque carousel into `PlaqueCarousel.tsx`.
- [ ] Extract tiers carousel into `TierCarousel.tsx`.
- [ ] Correct unused imports (`Zap`, `Target`).

### ServiceHub.tsx & AtivosAds.tsx
- [ ] Audit for similar cleanup opportunities (repetitive mappings, cleanup `any` types).

## Phase 3: Final Sweep
- [ ] Remove all commented-out code blocks.
- [ ] Standardize prop types (use interfaces/types instead of `any`).
- [ ] Verify build and run lint to ensure zero errors.

## Verification Protocol
1. `npm run build` to verify no breaking changes.
2. `npm run lint` to verify clean code standards.
3. Manual visual check of affected sections.
