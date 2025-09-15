import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { resetScreenWidth } from '../../../test-utils/resetScreenWidth';
import { setMobileScreenWidth } from '../../../test-utils/setMobileScreenWidth';
import { AppNavigator } from '../AppNavigator';
import { screen } from '@testing-library/react';

describe('Test for AppNavigator component', () => {

    afterEach(resetScreenWidth);

    test('1.- Renders the <AppNavigator/> component', async () => {
        renderWithProviders(<AppNavigator/>);
        const component = await screen.findByTestId('AppNavigator-Component');
        expect(component).toBeInTheDocument();
    });

    test('2.- Whenever the <AppNavigator/> renders it need to render the <Navbar/> component', async () => {
        renderWithProviders(<AppNavigator/>);
        const navbarComponent = await screen.findByTestId('Navbar-Component');
        expect(navbarComponent).toBeInTheDocument();
    });

    test('3 Whenever the <AppNavigator/> renders it need to render the children if it has a children', async() => {
        renderWithProviders(
            <AppNavigator>
                <span>I'm the children</span>
            </AppNavigator>
        );
        const childrenComponent = await screen.findByTestId('AppNavigator-Content');
        expect(childrenComponent).toHaveTextContent("I'm the children");
    });

    test('4.- Whenever the <AppNavigator/> renders it need to do not render anything.', async() => {
        renderWithProviders(<AppNavigator/>);
        const childrenComponent = await screen.findByTestId('AppNavigator-Content');
        expect(childrenComponent).toBeEmptyDOMElement();
    });

});
