import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { Navbar } from '../Navbar';
import { screen } from '@testing-library/react';

describe('Test for Banner component', () => {

    test('1.- Renders the <Navbar/> component', async () => {
        renderWithProviders(<Navbar/>);
        const component = await screen.findByTestId('Navbar-Component');
        expect(component).toBeInTheDocument();
    });

});
