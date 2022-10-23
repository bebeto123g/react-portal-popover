import React, { FC } from 'react';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import styles from './Dialog.module.scss';

interface IDialogProps {
    onClose: () => void;
    isOpened: boolean;
    title?: string;
    text: string;
    successButtonText?: string;
    successButtonClick?: () => void;
    cancelButtonText?: string;
    cancelButtonClick?: () => void;
}

const Dialog: FC<IDialogProps> = (props) => {
    const {
        isOpened,
        onClose,
        title,
        text,
        successButtonText,
        successButtonClick,
        cancelButtonText,
        cancelButtonClick,
    } = props;

    return (
        <OverlayingPopup isOpened={isOpened} onClose={onClose}>
            <div className={styles.container}>
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.text}>{text}</div>
                <div className={styles.footer}>
                    {cancelButtonText && cancelButtonClick && (
                        <button onClick={cancelButtonClick}>{cancelButtonText}</button>
                    )}
                    {successButtonText && successButtonClick && (
                        <button onClick={successButtonClick}>{successButtonText}</button>
                    )}
                </div>
            </div>
        </OverlayingPopup>
    );
};

export default Dialog;
