import { test, expect } from '@playwright/test';

test.describe('Swift Translator Tests - Run Sequentially', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  test('Pos_Fun_0001 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gedhara yanavaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම ගෙදර යනවා');
  });

  test('Pos_Fun_0002 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'oyaa kaeevadha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('ඔයා කෑවද?');
  });

  test('Pos_Fun_0003 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api adha enavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('අපි අද එනවා');
  });

  test('Pos_Fun_0004 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mata vathura ooni.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මට වතුර ඕනි.');
  });

  test('Pos_Fun_0005 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'karuNaakaralaa mata udhavvak karanna puLuvandha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?');
  });

  test('Pos_Fun_0006 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama iiyee gamea giyaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම ඊයේ ගමේ ගියා');
  });

  test('Pos_Fun_0007 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api bath kanavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('අපි බත් කනවා');
  });

  test('Pos_Fun_0008 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama heta yanavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('මම හෙට යනවා');
  });

  test('Pos_Fun_0009 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'Office meeting ekak thiyenne');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    await page.waitForTimeout(3000);
    expect(output).toContain('Office meeting එකක් තියෙන්නෙ');
  });

  test('Pos_Fun_0010 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'Rs.500');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('Rs.500');
  });

  test('Pos_Fun_0011 - simple sentence', async ({ page }) => {
    await page.fill('textarea', '1/30/2026');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('1/30/2026');
  });

  test('Pos_Fun_0012 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'ela machan niyamayi.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('එල මචන් නියමයි.');
  });

  test('Pos_Fun_0013 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama paasael yanavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම පාසැල් යනවා');
  });

  test('Pos_Fun_0014 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama rata yanavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම රට යනවා');
  });

  test('Pos_Fun_0015 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'Whatsapp massage ekak evanna');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('Whatsapp massage එකක් එවන්න');
  });

  test('Pos_Fun_0016 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'eyaa enavadha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('එයා එනවද?');
  });

  test('Pos_Fun_0017 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mata eeka dhenna');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මට ඒක දෙන්න');
  });

  test('Pos_Fun_0018 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mata baya hithenavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මට බය හිතෙනවා');
  });

  test('Pos_Fun_0019 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'hari hari');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('හරි හරි');
  });

  test('Pos_Fun_0020 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api yamu gedhara');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('අපි යමු ගෙදර');
  });

  test('Pos_Fun_0021 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'eeka mama dhanne naee');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('ඒක මම දන්නෙ නෑ');
  });

  test('Pos_Fun_0022 - simple sentence', async ({ page }) => {
    await page.fill('textarea', '50 kg');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('50 kg');
  });

  test('Pos_Fun_0023 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gamea yanavaa!');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගමේ යනවා!');
  });

  test('Pos_Fun_0024 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gamea yanavaa. oyaa enavadha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගමේ යනවා. ඔයා එනවද?');
  });
  

  test('Neg_Fun_0001 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mamagameayanavaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගමේ යනවා');
  });

  test('Neg_Fun_0002 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama rat@ y$navaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම රට යනවා');
  });

  test('Neg_Fun_0003 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama rta yanava');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම රට යනවා');
  });

  test('Neg_Fun_0004 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'adoo vaedak baaragaththaanam eeka hriyata karapanko');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('අඩෝ වැඩක් බාරගත්තා නම් ඒක හරියට කරපන්කො ');
  });

  test('Neg_Fun_0005 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'hello mama go office now please do the thing fast');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('hello මම යනවා office එකට දැං වැඩ ඉක්මනට කරන්න');
  });

  test('Neg_Fun_0006 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gedhara yanavaa api heta envaa oyaa enavadha mama gedhara yanavaa api heta envaa oyaa enavadha mama gedhara yanavaa api heta envaa oyaa enavadha');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගෙදර යනවා. අපි හෙට එන්වා , ඔයා එනවද?');
  });

  test('Neg_Fun_0007 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama gedhara yanavaa.\n api heta envaa ,\n oyaa enavadha?');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම ගෙදර යනවා,\n අපි හෙට එන්වා ,\n ඔයා එනවද?');
  });

  test('Neg_Fun_0008 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api gamee        yanavaa.');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('අපි ගමේ යනවා.');
  });

  test('Neg_Fun_0009 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'api paasael ');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('අපි පාසැල් ගියා');
  });

  test('Neg_Fun_0010 - simple sentence', async ({ page }) => {
    await page.fill('textarea', 'mama heta giyaa');
    const outputLocator = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputLocator).not.toHaveText('');
    const output = await outputLocator.textContent();
    expect(output).toContain('මම හෙට යනවා');
  });

  test('Pos_UI_0001 - Real-time output update', async ({ page }) => {
  await page.fill('textarea', 'mama gedhara yanavaa');

  const outputLocator = page.locator('div.whitespace-pre-wrap').first();

  // Check output appears while typing (UI response)
  await expect(outputLocator).not.toHaveText('');
  });

});