const PercyScript = require("@percy/script");

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto(process.env.PERCY_URL);
  await page.waitFor(".is-loaded");
  await percySnapshot("TodoMVC home page");
});
