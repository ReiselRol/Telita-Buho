import { translations } from "../../i18n/translations";
import type { I18nType } from "../../types/I18nType"
import type { LanguageIdType } from "../../types/LanguageIdType"

/**
 * **DESCRIPTION:**
 * 
 * With this interface we can define the properties that translate
 * method need. First of all we need the stringIdentifier property that
 * must be an instance of I18nType or a string that is the translation
 * tag that the translation file it has. The second property is the
 * languageId id that need to conatain a LanguageIdType.
 */
interface translateProps {
    /**
     * With this property you need to pass a
     * string of the name that have the translations property on i18n folder
     * or you can pas an instanced object of I18nType.
     */
    stringIdentifier: I18nType | string,
    /**
     * With this property you need to pass a LanguageIdType value.
     */
    languageId: LanguageIdType
}

/**
 * **DESCRIPTION:**
 * 
 * With this method you can get the translation from the i18n
 * folder by passing the i18n tag or an object of I18nType and the
 * languageId you want to translate it.
 * 
 * **PARAMETERS:**
 * 
 * @param Object You must pass an object with two properties:
 *  * *stringIdentifier*: With this property you need to pass a
 * string of the name that have the translations property on i18n folder
 * or you can pas an instanced object of I18nType.
 *  * *languageId*: With this property you need to pass a LanguageIdType
 * value.
 * 
 * **EXAMPLE TO USE:**
 * 
 * @example
 * const exampleTranslatedToEnglish = translate({
 *  stringIdentifier: 'example',
 *  languageId: 'en'
 * });
 */
export const translate = ({ stringIdentifier, languageId }: translateProps): string => {
    if (typeof stringIdentifier === 'string') {
        if (translations[stringIdentifier] != undefined) return translations[stringIdentifier][languageId];
        else return translations.errorLocalizedIdNotFound[languageId];
    } else return stringIdentifier[languageId];
}
