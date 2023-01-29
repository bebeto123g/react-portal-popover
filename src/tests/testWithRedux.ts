import { render } from '@testing-library/react';
import { ReactNode } from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

export function renderWithRedux(
    component: ReactNode,
    { initialState, store = createStore(reducer, initialState) },
) {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
}
