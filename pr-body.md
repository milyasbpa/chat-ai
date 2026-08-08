## 📝 Description

Implemented the Guest Mode Chat interface according to Figma designs. This includes the welcome empty state with Quickstart cards and the main chat input field at the bottom.

## 🛠️ Changes Made

- Created `EmptyState` component with the welcome text and 4 Quickstart cards.
- Modified `QuickstartCard` to accept an `iconWrapperClassName` for custom icon background colors.
- Created `ChatInput` component with a responsive text area and submit button.
- Updated `src/app/page.tsx` to integrate these components using flex layout.

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

## 🧪 How To Test

1. Run `pnpm dev`
2. Open http://localhost:3000
3. Verify the "Hey, I'm Chat AI" text is centered.
4. Verify the 4 Quickstart cards have different icon background colors.
5. Verify the chat input field is sticky/pinned at the bottom of the screen.

## ✅ Verification & Testing

- [ ] Storybook testing
- [ ] Unit/Integration tests
- [x] Manual testing on browsers (Desktop, Tablet, Mobile)

## 🔗 Related Issues / Links

- Figma: https://www.figma.com/design/gMJHtCs6yoMkiazUfPMUxI/chat-ai-figma?node-id=2067-5944&m=dev
- Ticket/Issue:

## ⚠️ Notes for Reviewers

- The submit button is currently disabled by default as per the design until we implement typing states.
