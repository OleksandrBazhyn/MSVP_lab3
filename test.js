import { Builder, By } from "selenium-webdriver";

export async function testWebSite(webSiteLink) {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get(webSiteLink);
    
    await firstTestCase(driver);
    console.log("First test case passed: ", (await firstTestCase(driver)));

    await secondTestCase(driver);
    console.log("Second test case passed: ", (await secondTestCase(driver)));

    await thirdTestCase(driver);
    console.log("Third test case passed: ", (await thirdTestCase(driver)));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await driver.quit();
  }
}


async function firstTestCase(driver) {
    let res = false;
    try {

    } catch (error) {
        console.error("Error in first test case:", error);
        res = false;
    } finally {
        return res;
    }
}

async function secondTestCase(driver) {
    let res = false;
    try {

    } catch (error) {
        console.error("Error in first test case:", error);
        res = false;
    } finally {
        return res;
    }
}

async function thirdTestCase(driver) {
    let res = false;
    try {

    } catch (error) {
        console.error("Error in first test case:", error);
        res = false;
    } finally {
        return res;
    }
}