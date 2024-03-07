class Localization {
    constructor(language = 'en') {
      this.language = language;
      this.translations = {};
    }
  
    setLanguage(language) {
      this.language = language;
    }
  
    addTranslation(key, value) {
      this.translations[key] = value;
    }
  
    translate(key) {
      return this.translations[key] || `Translation not found for key: ${key}`;
    }
  }
  
  module.exports = Localization;
  