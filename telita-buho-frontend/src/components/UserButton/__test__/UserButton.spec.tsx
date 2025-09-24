import { UserButton } from '../UserButton';
import { render, screen } from '@testing-library/react';

describe('Test for UserButton component', () => {

    test('1.- Renders the <UserButton/> component', async () => {
        render(<UserButton/>);
        const component = await screen.findByTestId('UserButton-Component');
        expect(component).toBeInTheDocument();
    });

});
