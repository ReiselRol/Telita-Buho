import { useLoginButton } from '../useLoginButton';
import { act, renderHook } from '@testing-library/react';
import { getProviderRenderWrapper } from '../../../test-utils/getProviderRenderWrapper';
import type { ProviderWrapperType } from '../../../types/ProviderWrapperType';
import type { ProviderStoreType } from '../../../types/ProviderStoreType';
import { resetWindowsProperties } from '../../../test-utils/resetWindowsProperties';
import { getCurrentRoute } from '../../../test-utils/getCurrentRoute';
import { AppRoutes } from '../../../constants/AppRoutes';

describe('Test for useLoginButton custom hook', () => {
    let store: ProviderStoreType;
    let wrapper: ProviderWrapperType;
    let result: { current: ReturnType<typeof useLoginButton> };

    afterEach(resetWindowsProperties)

    beforeEach(() => {
        const { wrapper: Wrapper, store: Store } = getProviderRenderWrapper();
        wrapper = Wrapper;
        store = Store;
        result = renderHook(() => useLoginButton({}), {
            wrapper,
        }).result;
    });

    test('1.- the custom hook return the correct properties', () => {
        expect(result.current.goToLogin).toBeDefined();
    });

    test('2.- the custom hook function called "goToLogin" works as expected', () => {
        act(() => {
            result.current.goToLogin();
        });

        expect(getCurrentRoute()).toBe(AppRoutes.LoginPage);
    })
});
