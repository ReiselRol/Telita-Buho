import type { TranslationsType } from '../types/TranslationsType';

/**
 * **DESCRIPTION:**
 * 
 * With this constant we can have all the translations of the aplication
 * that is being used by the custom hook calles useTranslations.
 */
export const translations: TranslationsType = {
  /**
   * With this tag you can render or the spanish text or the englih text.
   */
  example: {
    es: 'ejemplo',
    en: 'example',
    fr: 'exemple',
    de: 'Beispiel',
    it: 'esempio',
    ja: '例',
    zhHans: '例子',
    pt: 'exemplo',
    ru: 'пример',
    ko: '예',
    zhHant: '例子',
  },
  errorLocalizedIdNotFound: {
    es: 'Elemento no encontrado.',
    en: 'Item not found.',
    fr: 'Élément non trouvé.',
    de: 'Element nicht gefunden.',
    it: 'Elemento non trovato.',
    ja: '要素が見つかりません。',
    zhHans: '未找到元素。',
    pt: 'Elemento não encontrado.',
    ru: 'Элемент не найден.',
    ko: '항목을 찾을 수 없습니다.',
    zhHant: '未找到元素。'
  },
};
