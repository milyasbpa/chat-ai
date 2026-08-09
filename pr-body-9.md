## Implement Chat History UI

This PR implements the Chat History UI and associated states based on the provided Figma designs.

### Features

- **AI Avatar & Chat Layout**: Right-aligned user bubbles, left-aligned AI bubbles with custom background colors, borders, and typography perfectly matching Figma.
- **Copy and Regenerate Actions**: Custom SVGs exactly extracted from Figma nodes, styled beautifully on AI messages.
- **Typing Indicator**: Smooth, micro-animated bouncy dots indicator for loading individual chat responses.
- **Jump to Bottom**: Floating action button that appears when the user scrolls up, allowing a quick smooth jump to the bottom of the chat.
- **Error State Bubble**: Beautifully styled inline toast-like badge indicating an error on an AI response, hiding unnecessary actions.
- **Loading History State**: Centered `loader-4-fill` spinner with descriptive text mimicking the design for initial fetch states.
- **Responsive Layout**: Pixel-perfect constraints across Mobile, Tablet, and Desktop resolutions.

### Testing / Visual Regressions

Below are the automated screenshots capturing the different states.

#### 1. Normal Chat (with Jump to Bottom visible)

| Desktop                                                                                        | Tablet                                                                                       | Mobile                                                                                       |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/jump-desktop.png) | ![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/jump-tablet.png) | ![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/jump-mobile.png) |

#### 2. Code Block State

| Desktop                                                                                        | Tablet                                                                                       | Mobile                                                                                       |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/code-desktop.png) | ![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/code-tablet.png) | ![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/code-mobile.png) |

#### 3. Error State Bubble

| Desktop                                                                                         | Tablet                                                                                        | Mobile                                                                                        |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/error-desktop.png) | ![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/error-tablet.png) | ![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/error-mobile.png) |

#### 3. Loading History State

| Desktop                                                                                           | Tablet                                                                                          | Mobile                                                                                          |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![Desktop](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/loading-desktop.png) | ![Tablet](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/loading-tablet.png) | ![Mobile](https://raw.githubusercontent.com/milyasbpa/chat-ai/pr-assets/pr9/loading-mobile.png) |
