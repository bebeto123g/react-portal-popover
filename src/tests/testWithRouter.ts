import React, { FC, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export function testWithRouter(
    component: ReactNode,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
    const Wrapper: FC = ({ children }) => <Router history={history}>{children}</Router>;

    return {
        ...render(component, { wrapper: Wrapper }),
        history,
    }
}
