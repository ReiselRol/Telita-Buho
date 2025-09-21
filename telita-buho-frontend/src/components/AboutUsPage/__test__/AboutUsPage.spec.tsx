import { AboutUsPage } from '../AboutUsPage';
import { render, screen } from '@testing-library/react';

describe('Test for AboutUsPage component', () => {

    test('1.- Renders the <AboutUsPage/> component', async () => {
        render(<AboutUsPage/>);
        const component = await screen.findByTestId('AboutUsPage-Component');
        expect(component).toBeInTheDocument();
    });

});
