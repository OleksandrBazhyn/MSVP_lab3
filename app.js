import { testWebSite } from "./test.js";

const webSiteLink = "https://www.selenium.dev/selenium/web/web-form.html";


const res = await testWebSite(webSiteLink);

console.log(res);