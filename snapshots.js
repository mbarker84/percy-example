const PercyScript = require("@percy/script");

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto("https://confident-yonath-b6fd80.netlify.com/");
  await page.waitFor(".is-loaded");
  await percySnapshot("TodoMVC home page");
});
