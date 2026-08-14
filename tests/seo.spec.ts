import { test, expect } from '@playwright/test';

/** Anchors that existed before the redesign. Breaking them breaks old links. */
const PRESERVED_ANCHORS = ['hero', 'home', 'experience', 'projects', 'skills', 'contact'];

test.describe('metadata', () => {
  test('keeps title, canonical and description', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Moh Alief Rizky Ramadhan - Portfolio');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://maliefrr.github.io/'
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Moh Alief Rizky Ramadhan/
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary');
  });

  test('preserves every pre-redesign anchor id', async ({ page }) => {
    await page.goto('/');
    for (const id of PRESERVED_ANCHORS) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  });

  test('exposes a valid Person schema', async ({ page }) => {
    await page.goto('/');
    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const schema = JSON.parse(raw!);

    expect(schema['@type']).toBe('ProfilePage');
    expect(schema.mainEntity['@type']).toBe('Person');
    expect(schema.mainEntity.name).toBe('Moh Alief Rizky Ramadhan');
    expect(schema.mainEntity.sameAs).toHaveLength(3);

    // Deliberately withheld: employer goes stale, phone invites scraping.
    expect(schema.mainEntity).not.toHaveProperty('worksFor');
    expect(schema.mainEntity).not.toHaveProperty('telephone');
    expect(schema.mainEntity.address.addressLocality).toBe('Sidoarjo');
  });
});

test.describe('agent-readable routes', () => {
  // The sitemap is emitted by the build only, so it is absent under `astro dev`.
  const buildOnly = new Set(['/sitemap-index.xml']);

  for (const path of ['/llms.txt', '/llms-full.txt', '/robots.txt', '/sitemap-index.xml']) {
    test(`${path} is served`, async ({ request }) => {
      test.skip(
        buildOnly.has(path) && process.env.E2E_DEV === '1',
        'emitted by astro build, not astro dev'
      );
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      expect((await response.text()).trim().length).toBeGreaterThan(0);
    });
  }

  test('llms-full.txt stays in sync with the content collections', async ({ request }) => {
    const body = await (await request.get('/llms-full.txt')).text();

    // Every role and project on the page must appear in the text mirror.
    for (const role of [
      'Frontend Developer',
      'Technical Support Staff',
      'Android Developer',
      'Junior ERP Support',
      'Assistant Lecturer',
    ]) {
      expect(body).toContain(role);
    }

    for (const project of ['Medqueue', 'Gakda Sorume Koltim', 'E-KTM']) {
      expect(body).toContain(project);
    }
  });

  test('robots.txt points at the sitemap', async ({ request }) => {
    const body = await (await request.get('/robots.txt')).text();
    expect(body).toContain('Sitemap: https://maliefrr.github.io/sitemap-index.xml');
  });
});
