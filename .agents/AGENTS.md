# Chat AI Portfolio - Project Rules

This is the central rulebook for all AI Agents working on this Next.js project.

## Architecture Rules

1. **Clean Architecture / Feature-Sliced Design**:
   - `src/app`: Only for Next.js routing (page.tsx, layout.tsx, route.tsx). Do not place business logic here.
   - `src/core`: Global infrastructure (e.g., config, generic utils, global state, reusable base components).
   - `src/features`: Domain modules (e.g., `chat-session`, `auth`). Each feature has its own `container`, `sections` (stateful), `components` (stateless), and `hooks`.
2. **Component Pattern (ADLC)**:
   - Use Atomic Design principles. Atoms and Molecules belong in `src/core/components` if they are reusable, or inside `src/features/.../components` if they are feature-specific.
3. **No Axios**:
   - MUST use the native `fetch` API. This is critical for Server-Sent Events (SSE) streaming compatibility and Next.js native caching.
4. **Tailwind v4 & Radix UI**:
   - DO NOT install or use Shadcn CLI. We build custom headless components using Radix UI primitives and our own Tailwind CSS v4 design tokens to match Figma exactly.
5. **State Management**:
   - `Zustand` for UI/Client state.
   - `TanStack Query (React Query)` for Async/Server state.
   - `TanStack Form` for form handling and validation.

## Performance & Quality

1. Use `@tanstack/react-virtual` for lists (e.g., chat history).
2. Must write semantic HTML and accessible ARIA attributes.
3. Ensure no linting or formatting errors before pushing code.

## Git & Workflow Rules (STRICT)

1. **NEVER push directly to `main`**. All work must be pushed to a feature branch, and a Pull Request must be created first. No exceptions.

## Design Implementation Rules

1. **Strict Figma Compliance**: Do not over-engineer components. Stick strictly to Figma properties and do not add unspoken states (like hover, focus, active, disabled) unless explicitly defined in the Figma node or explicitly requested by the user.

2. **TypeScript Integrity**: Always run `tsc --noEmit` and ensure there are no TypeScript errors before declaring a task or component finished.
