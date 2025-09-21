import { useLanguageSelector } from '../useLanguageSelector';
import { act, renderHook, waitFor } from '@testing-library/react';
import { getProviderRenderWrapper } from '../../../test-utils/getProviderRenderWrapper';
import type { ProviderWrapperType } from '../../../types/ProviderWrapperType';
import type { ProviderStoreType } from '../../../types/ProviderStoreType';
import { setLanguage } from '../../../redux/slices/AppSlice';
import type { LanguageIdType } from '../../../types/LanguageIdType';
import type { ChangeEvent } from 'react';

describe('Test for useLanguageSelector custom hook', () => {
    let store: ProviderStoreType;
    let wrapper: ProviderWrapperType;
    let result: { current: ReturnType<typeof useLanguageSelector> };

    beforeEach(() => {
        const { wrapper: Wrapper, store: Store } = getProviderRenderWrapper();
        wrapper = Wrapper;
        store = Store;
        result = renderHook(() => useLanguageSelector({}), { wrapper, }).result;
    });

    test('1.- the custom hook return the correct properties.', () => {
        expect(result.current.t).toBeDefined();
        expect(result.current.onChange).toBeDefined();
        expect(result.current.value).toBeDefined();
    });

    test('2.- the custom hook return the value of "value" based on what we get on the state.', () => {
        act(() => { store.dispatch(setLanguage('en')); });

        result = renderHook(() => useLanguageSelector({}), { wrapper, }).result;

        expect(result.current.value).toBe('en');
    });

    test('3.- when you use the "onChange" method should change the state and the value prop.', async () => {
        let valueResult: LanguageIdType = 'en';

        act(() => { store.dispatch(setLanguage('en')); });

        act(() => {
            const mockedEvent = { target: { value: 'ko' } } as ChangeEvent<HTMLSelectElement>
            result.current.onChange(mockedEvent);
            valueResult = result.current.value;
        });

        await waitFor(() => { expect(result.current.value).toBe('ko'); });

        expect(store.getState().AppSlice.UserPreferences.Language).toBe('ko');
    });

});
