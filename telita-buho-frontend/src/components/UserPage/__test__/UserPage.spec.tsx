import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { UserPage } from '../UserPage';
import { screen } from '@testing-library/react';

describe('Test for UserPage component', () => {

    test('1.- Renders the <UserPage/> component', async () => {
        renderWithProviders(<UserPage/>);
        const component = await screen.findByTestId('UserPage-Component');
        expect(component).toBeInTheDocument();
    });

});
