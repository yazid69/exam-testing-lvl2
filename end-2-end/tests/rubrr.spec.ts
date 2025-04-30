import { test, expect } from '@playwright/test';

test.describe('Rubrr tests e2e ', () => {
    test('accès à la page d’accueil et clic sur un tag', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        const tag = page.getByRole('link', { name: 'Html' });
        await expect(tag).toBeVisible();
        await tag.click();
        await expect(page.getByRole('textbox')).toBeVisible();
    });

    test('accès au glossaire et ouverture d’une fiche', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.getByRole('link', { name: 'Liste des questions' }).click();
        const firstCard = page.locator('table tr').nth(1);
        await firstCard.getByRole('link').first().click();
        await expect(page.locator('h2')).toBeVisible();
    });
});
