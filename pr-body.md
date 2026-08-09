## 📝 Description

Implemented the Guest Mode Chat interface according to Figma designs and performed structural cleanup. This includes the welcome empty state, main chat input field, chat history rendering, code block styling, and architectural refactoring to strictly adhere to the Single Responsibility Principle and i18n support.

## 🛠️ Changes Made

- **UI Components:**
  - Created `EmptyState` component with welcome text and Quickstart cards.
  - Created `ChatInput` component with a responsive text area and submit button.
  - Created `ChatMessage` and `ChatHistory` components to handle user and AI messages.
  - Implemented `react-markdown` and `react-syntax-highlighter` for rendering formatted text and code blocks.
  - Added "Jump to bottom" button for smooth scrolling in long chat histories.
  - Implemented Loading and Error states for AI messages.
- **Cleanup & Refactoring:**
  - Extracted all inline SVGs into reusable components in `src/core/icons/` (`CopyIcon`, `SendIcon`, `RegenerateIcon`, `AiBubbleIcon`, etc).
  - Extracted `getMarkdownComponents` out of `chat-message.tsx` into a dedicated file.
  - Extracted static data to `src/features/.../data/`.
  - Configured `next-intl` and set up translation JSONs (`en.json`), replacing hardcoded strings with i18n props injected from sections.
  - Converted all inline styles to Tailwind CSS classes.

## 🎨 UI/UX Changes

- [x] Yes
- [ ] No

## 📸 Attachment (UI Screenshots)

**Desktop (1440x900)**
<br>
![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr5/desktop.png)
<br><br>
**Tablet (768x1024)**
<br>
![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr5/tablet.png)
<br><br>
**Mobile (375x812)**
<br>
![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr5/mobile.png)
<br><br>
**Chat History (Normal)**
<br>
![Chat Normal](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr10/chat-normal.png)
<br><br>
**Error State & Loading State**
<br>
![Error State](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr10/error-state.png)
<br><br>
**Jump to Bottom Button**
<br>
![Jump to Bottom](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr10/jump-to-bottom.png)

## 🧪 How To Test

1. Run `pnpm dev`
2. Open http://localhost:3000
3. Verify the "Hey, I'm Chat AI" text is centered and Quickstart cards have different icon background colors.
4. Verify the chat input field is sticky/pinned at the bottom.
5. Verify the Chat History renders user and AI messages correctly, aligned to the left.
6. Verify code blocks have proper syntax highlighting and a "Copy code" button.
7. Scroll up and verify the "Jump to bottom" button appears and functions correctly.
8. Validate the error state renders visually correct.

## ✅ Verification & Testing

- [ ] Storybook testing
- [ ] Unit/Integration tests
- [x] Manual testing on browsers (Desktop, Tablet, Mobile)
- [x] TypeScript validation (`pnpm tsc --noEmit`) passes with 0 errors.

## 🔗 Related Issues / Links

- Figma: https://www.figma.com/design/gMJHtCs6yoMkiazUfPMUxI/chat-ai-figma?node-id=2067-5944&m=dev

## ⚠️ Notes for Reviewers

- Hardcoded strings have been fully extracted via `next-intl`.
- All inline components and icons have been refactored into distinct files.
