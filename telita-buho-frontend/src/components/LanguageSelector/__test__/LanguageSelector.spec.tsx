import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { LanguageSelector } from '../LanguageSelector';
import { screen } from '@testing-library/react';

describe('Test for LanguageSelector component', () => {

    test('1.- Renders the <LanguageSelector/> component', async () => {
        renderWithProviders(<LanguageSelector/>);
        const component = await screen.findByTestId('LanguageSelector-Component');
        expect(component).toBeInTheDocument();
    });

    test('2.- Whenever you click on the selector you need to have all the language options displayed.', async () => {
        renderWithProviders(<LanguageSelector/>);
        const selector = await screen.findByTestId('LanguageSelector-Selector');
        
        await userEvent.click(selector);

        expect(await screen.findByTestId('LanguageSelector-Option-es')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-en')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-fr')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-de')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-it')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-ja')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-pt')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-ru')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-ko')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-zhHans')).toBeInTheDocument();
        expect(await screen.findByTestId('LanguageSelector-Option-zhHant')).toBeInTheDocument();
    });

    test('3.- Whenever you renders the <LanguageSelector/> component, the selected option need to be Spanish', async () => {
        renderWithProviders(<LanguageSelector/>);
        const selector = await screen.findByTestId('LanguageSelector-Selector');

        expect(selector).toHaveValue('es');
    });

    test.each([
        ['es'], ['en'], ['fr'], ['de'], ['it'], ['ja'], ['pt'], ['ru'], ['ko'], ['zhHans'], ['zhHant']
    ])('4.- Whenever you click an option it should change the state and the value of the selector', async (languageId: string) => {
        const store = renderWithProviders(<LanguageSelector/>);
        const selector = await screen.findByTestId('LanguageSelector-Selector');
        
        await userEvent.selectOptions(selector, languageId);

        expect(store.getState().AppSlice.UserPreferences.Language).toBe(languageId);
    });

});
