## Description

This Pull Request introduces the foundational setup (Phase 1) for the Chat AI Portfolio project. The architecture is built using Next.js App Router and strictly follows the Clean Architecture (Feature-Sliced Design) pattern to ensure an enterprise-grade, scalable, and maintainable codebase.

## Type of Change
- [x] New feature (non-breaking change which adds functionality)
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [x] Architecture and Infrastructure setup

## Key Implementations

1. **Framework & Styling**:
   - Initialized Next.js 14+ App Router with TypeScript.
   - Integrated Tailwind CSS v4 (Headless UI approach).
2. **Clean Architecture Structure**:
   - `src/app`: Next.js Routing Layer.
   - `src/core`: Global Infrastructure, Config, and Reusable Utilities.
   - `src/features`: Domain-specific modules (`chat-onboarding`, `chat-session`, `auth`).
3. **State Management & Caching**:
   - Configured Zustand for global client state (e.g., Guest Mode, API Key).
   - Configured TanStack Query (React Query) with optimized stale times for server state.
4. **Testing Infrastructure**:
   - Integrated Jest and React Testing Library for Unit Tests.
   - Integrated Playwright for End-to-End (E2E) Tests.
5. **Quality Assurance & Standards**:
   - Storybook setup for UI component isolation and testing.
   - Husky pre-commit hooks configured to run `lint-staged`.
   - Strictly configured ESLint, Prettier, and Axe-core (Accessibility).
   - Custom AI Guidelines enforced via `.agents/AGENTS.md`.

## Verification & Checklist

- [x] My code follows the project's strict architecture guidelines (`AGENTS.md`).
- [x] Linter and formatting checks pass locally before pushing.
- [x] There are no hardcoded secrets or exposed API keys.
- [x] Storybook environment is fully operational.
