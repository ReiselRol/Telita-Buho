import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { ShopPage } from '../ShopPage';
import { screen } from '@testing-library/react';

describe('Test for ShopPage component', () => {

    test('1.- Renders the <ShopPage/> component', async () => {
        renderWithProviders(<ShopPage/>);
        const component = await screen.findByTestId('ShopPage-Component');
        expect(component).toBeInTheDocument();
    });

});
