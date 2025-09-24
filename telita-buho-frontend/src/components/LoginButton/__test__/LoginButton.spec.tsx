import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { LoginButton } from '../LoginButton';
import { screen } from '@testing-library/react';
import { getCurrentRoute } from '../../../test-utils/getCurrentRoute';
import { AppRoutes } from '../../../constants/AppRoutes';

describe('Test for LoginButton component', () => {

    test('1.- Renders the <LoginButton/> component', async () => {
        renderWithProviders(<LoginButton/>);
        const component = await screen.findByTestId('LoginButton-Component');
        expect(component).toBeInTheDocument();
    });

    test('2.- Whenever you click the <LoginButton/> component it will redirect you to "/login"', async () => {
        renderWithProviders(<LoginButton/>);
        const component = await screen.findByTestId('LoginButton-Component');

        await userEvent.click(component);

        expect(getCurrentRoute()).toBe(AppRoutes.LoginPage);
    })

});
