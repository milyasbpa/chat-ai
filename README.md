# Chat AI Portfolio

A fully functional, responsive Chat AI application built with Next.js App Router and Clean Architecture (Feature-Sliced Design).

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4 + Radix UI (Custom Design Tokens)
- **State Management:** Zustand (Client) + TanStack Query (Server)
- **Form Handling:** TanStack Form + Zod
- **API Fetching:** Native `fetch` (Optimized for Server-Sent Events / Streaming)
- **Quality Assurance:** Jest, React Testing Library, Storybook, Husky, ESLint, Prettier, Lighthouse CI

## Project Structure (Clean Architecture)

- `src/app`: Routing Layer (Next.js)
- `src/core`: Global Infrastructure (Reusable Components, Config, Global Utils)
- `src/features`: Domain Modules (e.g., `chat-onboarding`, `chat-session`, `auth`)

## Features

- Real-time AI chat interaction with typewriter streaming effects (SSE).
- Guest Mode vs Authenticated Mode sync.
- Local Storage API Key management.
- Regenerate, Pagination, and Chat History Revert capabilities.
- Advanced List Virtualization for seamless sidebar chat histories.
- Code block highlighting and markdown rendering.
- Fully responsive layout and accessible UI components.
