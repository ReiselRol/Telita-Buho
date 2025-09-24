import { useLanguageSelector } from '../../hooks/useLanguageSelector/useLanguageSelector';
import { type FC } from 'react';
import './LanguageSelector.css';
import { translate } from '../../methods/translate/translate';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface LanguageSelectorProps {

}

/**
 * **DESCRIPTION:**
 * 
 * Whit this component you can render a selector that is used for
 * select the language you want on the frontend app.
 * 
 * It's important to know that this component need to be inside of
 * the Provider that is using the store od *AppStore* because is
 * using properties from the state like the language.
 * 
 * It's important to know that this component need to be inside of
 * the Provider that is using the BrowseRouter too because we need
 * to know on what path we are actually.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <LanguageSelector/>
 * )
 */
export const LanguageSelector: FC<LanguageSelectorProps> = ({ }) => {

  const { t, onChange, value } = useLanguageSelector({});

  return (
    <div data-testid='LanguageSelector-Component'>
      <select
        data-testid='LanguageSelector-Selector'
        onChange={onChange} value={value}
        id="language"
        name="language"
        className='flag-styled'
        required
      >
        <option data-testid='LanguageSelector-Option-es' value="es">
          {translate({stringIdentifier: 'flags', languageId: 'es'}) + " " + t("spanish")}
        </option>
        <option data-testid='LanguageSelector-Option-en' value="en">
          {translate({stringIdentifier: 'flags', languageId: 'en'}) + " " + t("english")}
        </option>
        <option data-testid='LanguageSelector-Option-fr' value="fr">
          {translate({stringIdentifier: 'flags', languageId: 'fr'}) + " " + t("french")}
        </option>
        <option data-testid='LanguageSelector-Option-de' value="de">
          {translate({stringIdentifier: 'flags', languageId: 'de'}) + " " + t("german")}
        </option>
        <option data-testid='LanguageSelector-Option-it' value="it">
          {translate({stringIdentifier: 'flags', languageId: 'it'}) + " " + t("italian")}
        </option>
        <option data-testid='LanguageSelector-Option-ja' value="ja">
          {translate({stringIdentifier: 'flags', languageId: 'ja'}) + " " + t("japanese")}
        </option>
        <option data-testid='LanguageSelector-Option-pt' value="pt">
          {translate({stringIdentifier: 'flags', languageId: 'pt'}) + " " + t("portuguese")}
        </option>
        <option data-testid='LanguageSelector-Option-ru' value="ru">
          {translate({stringIdentifier: 'flags', languageId: 'ru'}) + " " + t("russian")}
        </option>
        <option data-testid='LanguageSelector-Option-ko' value="ko">
          {translate({stringIdentifier: 'flags', languageId: 'ko'}) + " " + t("korean")}
        </option>
        <option data-testid='LanguageSelector-Option-zhHans' value="zhHans">
          {translate({stringIdentifier: 'flags', languageId: 'zhHans'}) + " " + t("chineseSimplified")}
        </option>
        <option data-testid='LanguageSelector-Option-zhHant' value="zhHant">
          {translate({stringIdentifier: 'flags', languageId: 'zhHant'}) + " " + t("chineseTraditional")}
        </option>
      </select>
    </div>
  )
}

const ejemplo = [0, 2, 5, 3, 4, 5, 76]
ejemplo.push()