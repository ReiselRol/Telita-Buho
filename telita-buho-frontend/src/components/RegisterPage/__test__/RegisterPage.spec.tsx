import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { RegisterPage } from '../RegisterPage';
import { screen } from '@testing-library/react';

describe('Test for RegisterPage component', () => {

    test('1.- Renders the <RegisterPage/> component', async () => {
        renderWithProviders(<RegisterPage/>);
        const component = await screen.findByTestId('RegisterPage-Component');
        expect(component).toBeInTheDocument();
    });

});
