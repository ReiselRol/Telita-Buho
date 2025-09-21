import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { LoginPage } from '../LoginPage';
import { screen } from '@testing-library/react';

describe('Test for LoginPage component', () => {

    test('1.- Renders the <LoginPage/> component', async () => {
        renderWithProviders(<LoginPage/>);
        const component = await screen.findByTestId('LoginPage-Component');
        expect(component).toBeInTheDocument();
    });

});
