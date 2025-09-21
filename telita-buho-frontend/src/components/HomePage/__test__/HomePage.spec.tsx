import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { HomePage } from '../HomePage';
import { screen } from '@testing-library/react';

describe('Test for HomePage component', () => {

    test('1.- Renders the <HomePage/> component', async () => {
        renderWithProviders(<HomePage/>);
        const component = await screen.findByTestId('HomePage-Component');
        expect(component).toBeInTheDocument();
    });

});
