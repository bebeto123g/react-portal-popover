import React, { FC, ReactNode } from 'react';
import styles from './OverlayingPopup.module.scss';
import Portal from '../Portal';

interface IOverlayingPopupProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
}

const OverlayingPopup: FC<IOverlayingPopupProps> = (props) => {
    const { children, isOpened, onClose } = props;

    if (!isOpened) return null;

    return (
        <Portal>
            <div className={styles.container}>
                <div className={styles.overlay} onClick={onClose} tabIndex={0} />
                {children}
            </div>
        </Portal>
    );
};

export default OverlayingPopup;
