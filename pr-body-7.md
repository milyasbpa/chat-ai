Implemented the "Signed In" state for the Sidebar according to the Figma design.

## 🛠️ Changes Made

- Updated `AccountDropdown` to only show the "Log out" option (removed Settings).
- Refined the dropdown trigger button in `Sidebar` to match the exact paddings, gap, and background colors as specified in Figma (`gap-2`, `px-[14px]`, etc).
- Ensured focus and open states for the dropdown trigger look correct with `data-[state=open]:bg-neutral-50` and `focus-visible:bg-neutral-50`.
- Used a dummy avatar (`i.pravatar.cc`) for demonstration purposes in this PR.

## 🎨 UI/UX Changes

- [x] Yes
- [ ] No

## 📸 Attachment (UI Screenshots)

**Desktop (1440x900)**
<br>
![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr7/desktop.png)
<br>
![Desktop Dropdown](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr7/desktop-dropdown.png)

**Tablet (768x1024) - Sidebar Open**
<br>
![Tablet Open](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr7/tablet-open.png)

**Mobile (375x812) - Sidebar Open**
<br>
![Mobile Open](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr7/mobile-open.png)

## 🧪 How to Test

1. Checkout to the branch `feature/signed-in-sidebar`.
2. Run `pnpm dev`.
3. Open `http://localhost:3000`.
4. (Optional) Check mobile/tablet view by opening the hamburger menu.
5. Click on the user profile button at the bottom of the sidebar to see the "Log out" dropdown menu.
