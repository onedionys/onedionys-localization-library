<h1 align="center">Welcome to One Dionys - Localization Library! 👋 </h1>

<p align="center">A library to support multilingual experiences in web applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-localization-library?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-localization-library?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-localization-library?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-localization-library?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-localization-library.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-localization-library?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-localization-library?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const Localization = require('./src/localization');

// Create a new instance of Localization with default language 'en'
const localization = new Localization();

// Add translations
localization.addTranslation('hello', 'Hello');
localization.addTranslation('bye', 'Goodbye');

// Translate a key
console.log(localization.translate('hello')); // Output: Hello

// Change language
localization.setLanguage('fr');

// Translate a key again
console.log(localization.translate('hello')); // Output: Translation not found for key: hello
```

#### Explanation

* The Localization Library provides functionality to manage translations for different languages in an application. It allows adding translations for specific keys and retrieving translations based on the current language set.

#### Return Value

* `setLanguage(language)`: Sets the current language to the specified language.
* `addTranslation(key, value)`: Adds a translation for the given key.
* `translate(key)`: Retrieves the translation for the specified key in the current language. If the translation is not found, it returns a default message indicating that the translation was not found for the key.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 13 March 2024
* v4.0.2 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Localization Library is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Localization Library? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
