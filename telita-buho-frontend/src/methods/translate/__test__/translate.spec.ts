import { translations } from '../../../i18n/translations';
import type { I18nType } from '../../../types/I18nType';
import { translate } from '../translate';

describe('Test for translate method', () => {
    test('1.- the method return the correct translation with an existing translation ID', () => {
        const translatedString = translate({
            stringIdentifier: 'example',
            languageId: 'es'
        });
        expect(translatedString).toBe(translations['example'].es);
    });

    test('2.- the method return an error of the translation whenever you try an unexisting translation ID', () => {
        const translatedString = translate({
            stringIdentifier: 'siiiiHombreeee',
            languageId: 'ko'
        });
        expect(translatedString).toBe(translations['errorLocalizedIdNotFound'].ko);
    });

    test('3.- the method return the correct translation with an instanced object of I18nType', () => {
        
        const objectToTranslate: I18nType = translations['example']

        const translatedString = translate({
            stringIdentifier: objectToTranslate,
            languageId: 'ja'
        });
        expect(translatedString).toBe(objectToTranslate.ja);
    });
});
