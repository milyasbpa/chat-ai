Implemented the "Past Prompt State" (Chat History) replacing the Empty State, following the Figma design.

## 🛠️ Changes Made

- **`ChatMessage` Component:**
  - Added support for User bubbles (right-aligned, light gray background).
  - Added support for AI bubbles (left-aligned, white background with border).
  - Included Avatar with "AI" initials fallback.
  - Implemented the typing indicator loading animation for AI (`isLoading=true`).
  - Added image row rendering for AI responses with attachments.
  - Implemented the Action Buttons (Copy and Regenerate) for AI messages.
- **`ChatHistory` Component:**
  - Renders a list of `ChatMessage` based on mock data.
- **`page.tsx` Updates:**
  - Swapped out `<EmptyState />` for `<ChatHistory />`.
  - Added a scroll container (`#chat-scroll-container`) to manage chat vertical overflow smoothly.
  - Created a robust mock data array to perfectly reflect the scenario requested in Figma.

## 🎨 UI/UX Changes

- [x] Yes
- [ ] No

## 📸 Attachment (UI Screenshots)

**Desktop (1440x900)**
<br>
![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/desktop.png)

**Tablet (768x1024)**
<br>
![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/tablet.png)

**Mobile (375x812)**
<br>
![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/mobile.png)

## 🧪 How to Test

1. Checkout to the branch `feature/chat-history`.
2. Run `pnpm dev`.
3. Open `http://localhost:3000`.
4. Observe the chat history replacing the empty state.
5. Verify that User messages are on the right and AI messages are on the left.
6. Check that the images render correctly in the 2nd AI bubble.
7. Scroll down to see the final AI bubble displaying the animated typing indicator.
8. Verify responsiveness by resizing the window to Mobile sizes.
