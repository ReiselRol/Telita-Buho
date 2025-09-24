import { useDispatch } from "react-redux"
import { useTranslations } from "../useTranslations/useTranslations";
import type { LanguageIdType } from "../../types/LanguageIdType";
import { setLanguage } from "../../redux/slices/AppSlice";
import { useCallback, type ChangeEvent } from "react";
import { useSelector } from "react-redux";
import type { UseSelectorType } from "../../types/UseSelectorType";

/**
 * **DESCRIPTION:**
 * 
 * With this interface we can represent the return of the
 * custom hook of the useLanguageSelector, that this custom
 * hook will return only two properties, one calle `t` that
 * is a function that you can use for get the translation. The
 * other prop that you can get with this is the `changeLanguage`
 * that is a function for change the language of all the fontend app.
 */
interface UseLanguageSelectorReturn {
    /**
   * **DESCRIPTION:**
   * 
   * With this function you can get the translated text transalated
   * on the language that is selected on the state by passing the
   * translation tag.
   * 
   * **PARAMETERS:**
   * 
   * @param stringIdentifier On this property you need to pass the
   * translation tag of the file of translations.ts that you want
   * to get the translation for.
   * 
   * **RETURNS:**
   * 
   * @returns returns the text trasnlated on the language selected on
   * the state.
   * 
   * **EXAMPLE OF USE:**
   * 
   * @example
   * const { t } = useLanguageSelector({});
   * const textTranslated: string = t('exampleTag');
   */
    t: (stringIdentifier: string) => string;
    /**
   * **DESCRIPTION:**
   * 
   * With this function you can pass it on the onChange that have
   * the <selector/> from html to set automatically the language
   * on the state when there is some changes.
   * 
   * **PARAMETERS:**
   * 
   * @param event On this property you need to pass the
   * event that have the onChange from html.
   * 
   * **EXAMPLE OF USE:**
   * 
   * @example
   * const { onChange, value } = useLanguageSelector({});
   * <select id="language" name="language" value={value} onChange={onChange} required>
   */
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    /**
     * **DESCRIPTION:**
     * 
     * With this prop you can get the actual translation that is on
     * the state and is used on the html <selector/> for show what is
     * the language selected.
     * 
     * **EXAMPLE OF USE:**
     * 
     * @example
     * const { onChange, value } = useLanguageSelector({});
     * <select id="language" name="language" value={value} onChange={onChange} required>
    */
    value: LanguageIdType;
}

/** * **DESCRIPTION:**
 * 
 * This interface currently have 0 properties but if you add any property
 * you must document it and type it correctly for the usability of the custom hook.
 */
interface UseLanguageSelectorProps {

}

/**
 * **DESCRIPTION:**
 * 
 * You need to write a description of what the useLanguageSelector do on here.
 * 
 * **RETURNS:**
 * 
 * @returns returns an object with the properties of: 
 * * need to write it
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * const { t } = useLanguageSelector({}); 
 */
export const useLanguageSelector = ({ }: UseLanguageSelectorProps): UseLanguageSelectorReturn => {

    const dispatch = useDispatch();
    const { t } = useTranslations({});

    const value = useSelector((state: UseSelectorType) => state.AppSlice.UserPreferences.Language);

    const onChange = useCallback((event: ChangeEvent<HTMLSelectElement>): void => {
        const newLanguageToSelect = event.target.value as LanguageIdType
        dispatch(setLanguage(newLanguageToSelect));
    }, [dispatch]);

    return {
        value,
        t,
        onChange,
    }

}
