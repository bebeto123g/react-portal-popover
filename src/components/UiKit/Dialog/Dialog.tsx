import React, { FC } from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './Dialog.module.scss';

interface IDialogButton {
    text: string;
    onClick: () => void;
}

interface IDialogProps {
    onClose: () => void;
    isOpened: boolean;
    title?: string;
    text: string;
    action?: IDialogButton;
    cancel?: IDialogButton;
}

const Dialog: FC<IDialogProps> = (props) => {
    const { isOpened, onClose, title, text, action, cancel } = props;

    return (
        <Overlay isOpened={isOpened} onClose={onClose}>
            <div className={styles.container}>
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.text}>{text}</div>
                <div className={styles.footer}>
                    {cancel && <button onClick={cancel.onClick}>{cancel.text}</button>}
                    {action && <button onClick={action.onClick}>{action.text}</button>}
                </div>
            </div>
        </Overlay>
    );
};

export default Dialog;
