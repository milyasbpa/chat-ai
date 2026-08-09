import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Capturing Code Block State...');
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(1000);
  
  // Scroll to show the code block. It is the second to last message (id 7).
  const container = page.locator('#chat-scroll-container');
  if (await container.count() > 0) {
    await container.evaluate((node) => {
      // scroll somewhat to the bottom, but leave room for the error message
      node.scrollTop = node.scrollHeight - 600;
      node.dispatchEvent(new Event('scroll'));
    });
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/pr9-assets/code-desktop.png' });
  
  await page.setViewportSize({ width: 768, height: 1024 });
  if (await container.count() > 0) {
    await container.evaluate((node) => {
      node.scrollTop = node.scrollHeight - 700;
      node.dispatchEvent(new Event('scroll'));
    });
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/pr9-assets/code-tablet.png' });
  
  await page.setViewportSize({ width: 375, height: 812 });
  if (await container.count() > 0) {
    await container.evaluate((node) => {
      node.scrollTop = node.scrollHeight - 700;
      node.dispatchEvent(new Event('scroll'));
    });
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/pr9-assets/code-mobile.png' });

  await browser.close();
  console.log('Code screenshots captured.');
})();
