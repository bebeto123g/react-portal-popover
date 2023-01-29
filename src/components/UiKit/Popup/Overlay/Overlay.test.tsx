import React from 'react';
import { render, screen } from '@testing-library/react';
import Overlay from './Overlay';
import userEvent from '@testing-library/user-event';

const onClose = jest.fn();

const OverlayTest = ({ isOpened }: { isOpened: boolean }) => {
    return (
        <Overlay onClose={onClose} isOpened={isOpened}>
            <span>Overlay test</span>
        </Overlay>
    );
};

describe('Overlay component', () => {
    test('open Overlay component', () => {
        render(<OverlayTest isOpened={true} />);
        expect(screen.getByText(/Overlay test/i)).toBeInTheDocument();
        userEvent.click(screen.getByText(/Overlay test/i), {
            ctrlKey: true,
        });
    });

    test('close Overlay component', () => {
        render(<OverlayTest isOpened={false} />);
        expect(screen.queryByText(/Overlay test/i)).toBeNull();
    });
});

