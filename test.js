import { Builder, By, Key, until } from "selenium-webdriver";

// Допоміжна функція для затримки
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function testWebSite(webSiteLink) {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get(webSiteLink);

    const first = await firstTestCase(driver);
    console.log("First test case passed: ", first);

    const second = await secondTestCase(driver);
    console.log("Second test case passed: ", second);

    const third = await thirdTestCase(driver);
    console.log("Third test case passed: ", third);

    return first && second && third;
  } catch (error) {
    console.error("Error:", error);
    return false;
  } finally {
    await driver.quit();
  }
}

// 1. Введення тексту та пароля, перевірка значення текстового поля
async function firstTestCase(driver) {
  let res = false;
  try {
    await delay(5000); // Затримка перед тестом

    const textInput = await driver.findElement(By.id("my-text-id"));
    await textInput.clear();
    await textInput.sendKeys("TestUser");

    const passwordInput = await driver.findElement(By.name("my-password"));
    await passwordInput.sendKeys("Secret123");

    // Перевірка, що текстове поле містить введене значення
    const value = await textInput.getAttribute("value");
    res = value === "TestUser";

    await delay(5000); // Затримка після тесту
  } catch (error) {
    console.error("Error in first test case:", error);
    res = false;
  } finally {
    return res;
  }
}

// 2. Вибір значення у селекті та встановлення чекбоксу
async function secondTestCase(driver) {
  let res = false;
  try {
    await delay(5000); // Затримка перед тестом

    const select = await driver.findElement(By.name("my-select"));
    await select.click();
    const option = await driver.findElement(By.css('select[name="my-select"] option[value="2"]'));
    await option.click();

    const checkbox2 = await driver.findElement(By.id("my-check-2"));
    await checkbox2.click();

    // Перевірка, що обрана друга опція та чекбокс встановлений
    const selectedValue = await select.getAttribute("value");
    const isChecked = await checkbox2.isSelected();
    res = selectedValue === "2" && isChecked;

    await delay(5000); // Затримка після тесту
  } catch (error) {
    console.error("Error in second test case:", error);
    res = false;
  } finally {
    return res;
  }
}

// 3. Введення дати та вибір кольору, перевірка значень
async function thirdTestCase(driver) {
  let res = false;
  try {
    await delay(5000); // Затримка перед тестом

    const dateInput = await driver.findElement(By.name("my-date"));
    await dateInput.clear();
    await dateInput.sendKeys("05/20/2025");

    const colorInput = await driver.findElement(By.name("my-colors"));
    await colorInput.clear();
    await colorInput.sendKeys("#ff0000");

    // Перевірка, що значення встановлені
    const dateValue = await dateInput.getAttribute("value");
    const colorValue = await colorInput.getAttribute("value");
    res = dateValue === "05/20/2025" && colorValue.toLowerCase() === "#ff0000";

    await delay(5000); // Затримка після тесту
  } catch (error) {
    console.error("Error in third test case:", error);
    res = false;
  } finally {
    return res;
  }
}