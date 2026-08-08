Implemented the "Long Input Message" state for the chat input box according to the Figma design.

## 🛠️ Changes Made

- Replaced the fixed-height `<input>` field with a dynamic `<textarea>` via the `TextField` component.
- Implemented auto-resize logic using `React.useLayoutEffect` to smoothly expand the height of the textarea up to `144px` (about 5 lines) before becoming scrollable.
- Added dynamic button states based on input length:
  - Empty: Disabled, gray background (`bg-neutral-100`).
  - Filled: Active, primary style (`bg-indigo-700`).
- Made the Submit button fully responsive:
  - On Desktop/Tablet: Shows both the send icon and "Submit" text.
  - On Mobile: Shrinks to a compact `44x44` square button containing only the send icon.

## 🎨 UI/UX Changes

- [x] Yes
- [ ] No

## 📸 Attachment (UI Screenshots)

**Desktop (1440x900)**
<br>
![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr8/desktop.png)

**Tablet (768x1024)**
<br>
![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr8/tablet.png)

**Mobile (375x812)**
<br>
![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr8/mobile.png)

## 🧪 How to Test

1. Checkout to the branch `feature/long-input-chat`.
2. Run `pnpm dev`.
3. Open `http://localhost:3000`.
4. Type or paste a long message into the chat input box.
5. Observe the input area expanding smoothly up to ~5 lines, then allowing scrolling.
6. Observe the Submit button turning active (indigo).
7. Resize the browser to mobile width and verify the Submit button becomes a square icon-only button.
