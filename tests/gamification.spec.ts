import { test, expect } from '@playwright/test';

test.describe('gamification layer', () => {
  test('renders player card, achievements and skill tree', async ({ page }) => {
    await page.goto('/');

    // Player card in hero.
    await expect(page.locator('#hero')).toContainText('Player Card');
    await expect(page.locator('#hero')).toContainText('Lv. 4');
    await expect(page.locator('#hero .xp-bar')).toHaveCount(1);

    // Achievements section with unlockable badges.
    await expect(page.locator('#achievements article')).toHaveCount(8);
    await expect(page.locator('#achievements')).toContainText('Performance Sage');
    await expect(page.locator('#achievements')).toContainText('Game Builder');

    // Skill tree with categories, no proficiency numbers.
    await expect(page.locator('#skills')).toContainText('Skill Tree');
    await expect(page.locator('#skills')).toContainText('Frontend');
    await expect(page.locator('#skills')).toContainText('Backend');
    await expect(page.locator('#skills')).not.toContainText('Proficiency');

    // Quest log reframe.
    await expect(page.locator('#experience')).toContainText('Quest Log');
  });
});
