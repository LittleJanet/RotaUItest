import { initialize, context } from "zle";

initialize({
  executablePath: process.env.ZLE_EXECUTABLE_PATH,
  headless: false,
  slowMo: 200,
  args: ["--window-size=1920,1080"]
});

setup(async () => {
  await context.page.setViewport({ width: 1920, height: 900 });
  await context.page.setRequestInterception(true);
  context.page.on("request", e => {
    if (e.url().startsWith("https://www.google-analytics.com/")) {
      e.abort();
    } else {
      e.continue();
    }
  });
});
