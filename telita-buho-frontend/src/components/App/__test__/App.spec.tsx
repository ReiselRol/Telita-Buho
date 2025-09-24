import { AppRoutes } from '../../../constants/AppRoutes';
import { resetWindowsProperties } from '../../../test-utils/resetWindowsProperties';
import { setRouteTo } from '../../../test-utils/setRouteTo';
import { App } from '../App';
import { render, screen } from '@testing-library/react';

describe('Test for App component', () => {

    afterEach(resetWindowsProperties);

    test('1.- Renders the <App/> component', async () => {
        render(<App/>);
        const component = await screen.findByTestId('App-Component');
        expect(component).toBeInTheDocument();
    });

    test('2.- Whenever the <App/> component renders on the route of "/" it will display the <HomePage/> component.', async () => {
        setRouteTo(AppRoutes.HomePage);
        render(<App/>);
        const homePageComponent = await screen.findByTestId('HomePage-Component');
        expect(homePageComponent).toBeInTheDocument();
    });

    test('3.- Whenever the <App/> component renders on the route of "/shop" it will display the <ShopPage/> component.', async () => {
        setRouteTo(AppRoutes.ShopPage);
        render(<App/>);
        const shopPageComponent = await screen.findByTestId('ShopPage-Component');
        expect(shopPageComponent).toBeInTheDocument();
    });

    test('4.- Whenever the <App/> component renders on the route of "/about-us" it will display the <AboutUsPage/> component.', async () => {
        setRouteTo(AppRoutes.AboutUsPage);
        render(<App/>);
        const aboutUsPageComponent = await screen.findByTestId('AboutUsPage-Component');
        expect(aboutUsPageComponent).toBeInTheDocument();
    });

    test('5.- Whenever the <App/> component renders on the route of "/login" it will display the <LoginPage/> component.', async () => {
        setRouteTo(AppRoutes.LoginPage);
        render(<App/>);
        const loginPageComponent = await screen.findByTestId('LoginPage-Component');
        expect(loginPageComponent).toBeInTheDocument();
    });

    test('6.- Whenever the <App/> component renders on the route of "/register" it will display the <RegisterPage/> component.', async () => {
        setRouteTo(AppRoutes.RegisterPage);
        render(<App/>);
        const registerPageComponent = await screen.findByTestId('RegisterPage-Component');
        expect(registerPageComponent).toBeInTheDocument();
    });

    test('7.- Whenever the <App/> component renders on an invalid route it will display the <HomePage/> component by default.', async () => {
        setRouteTo('an/invalid/route');
        render(<App/>);
        const homePageComponent = await screen.findByTestId('HomePage-Component');
        expect(homePageComponent).toBeInTheDocument();
    });

});