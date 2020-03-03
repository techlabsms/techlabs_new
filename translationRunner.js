const manageTranslations = require('react-intl-translations-manager').default;
const {allLocales} = require('./package.json');

manageTranslations({
    // this is where we have placed all the messages we extracted
    messagesDirectory: 'src/translations/extractedMessages',
    // this is where the new ready to be translated messages are generated and placed
    translationsDirectory: 'src/intl',
    // all supported locales
    languages: allLocales
});