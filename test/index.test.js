const assert = require('assert');
const Localization = require('../src/localization');

describe('Localization Library', () => {
  let localization;

  beforeEach(() => {
    localization = new Localization('en');
  });

  it('should translate a key', () => {
    localization.addTranslation('hello', 'Hello');
    assert.strictEqual(localization.translate('hello'), 'Hello');
  });

  it('should return default message if translation not found', () => {
    assert.strictEqual(localization.translate('notFound'), 'Translation not found for key: notFound');
  });

  it('should change language', () => {
    localization.setLanguage('fr');
    assert.strictEqual(localization.language, 'fr');
  });
});
