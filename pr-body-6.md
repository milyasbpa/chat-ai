## 📝 Description

**API Key UI Modal (UI Only)**

This PR introduces the **API Key Modal** layout as requested in the Figma design. Note that this PR only focuses on the UI. The actual state management and OpenAI integration logic will be implemented in a separate PR.

**Key Features:**

- Added custom headless `Accordion` component using Radix UI.
- Added custom headless `Dialog` wrapper using Radix UI.
- Added `Input` component for basic text input fields.
- Built the `ApiKeyModal` with the layout and form styling.
- Included the complete list of FAQs regarding API keys.
- Implemented a `max-h-[85vh]` with `overflow-y-auto` constraint inside the FAQ container to prevent the modal from getting excessively long when multiple accordions are opened.
- A temporary "Open API Key Modal" button has been added to `page.tsx` for easy testing and review.

## 📸 UI/UX Changes

**Desktop (1440x900)**
<br>
![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr6/desktop.png)

<br><br>
**Tablet (768x1024)**
<br>
![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr6/tablet.png)

<br><br>
**Mobile (375x812)**
<br>
![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr6/mobile.png)

## 🧪 How To Test

1. Pull this branch and run `pnpm dev`.
2. Open `localhost:3000`.
3. In the top-right corner of the page, click the temporary blue button **"Open API Key Modal"**.
4. Test interacting with the **Input field** (you should be able to type in it).
5. Open the **FAQ accordions** by clicking on them. Watch as they expand smoothly.
6. Open multiple FAQs to see the scrollable container (`max-h-[85vh]`) in action on smaller viewports.
7. Click the **"Cancel"** or **"Save"** button to ensure the modal closes correctly.

## 📎 Attachments

None (All images have been linked from `pr-assets` branch).
