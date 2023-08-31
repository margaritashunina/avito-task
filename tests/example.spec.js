const { test, expect } = require('@playwright/test');

test('Объявление добавлено в избранное', async ({page}) => {
  // Переходим на страницу нужного объявления
  await page.goto('https://www.avito.ru/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363');

  // Находим кнопку "Добавить в избранное и нажимаем на неё"
  await page.locator('button').filter({ hasText: 'Добавить в избранное'}).click();

  // Переходим на страницу избранного
  await page.goto('https://www.avito.ru/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363');

  // Проверяем, что нужно объявление было добавлено
  await expect(page.getByRole('heading', { name: 'Domain-Driven Design Distilled Vaughn Vernon' }).locator('span')).toBeVisible();
});
