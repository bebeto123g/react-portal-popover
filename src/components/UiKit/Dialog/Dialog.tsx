import React, { FC } from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './Dialog.module.scss';
import HeaderPopup from '../HeaderPopup/HeaderPopup';

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
                {title && <HeaderPopup onClose={onClose}>{title}</HeaderPopup>}
                <div className='modal-body'>{text}</div>
                <div className='modal-footer'>
                    {cancel && (
                        <button className='btn btn-outline-secondary' onClick={cancel.onClick}>
                            {cancel.text}
                        </button>
                    )}
                    {action && (
                        <button className='btn btn-primary' onClick={action.onClick}>
                            {action.text}
                        </button>
                    )}
                </div>
            </div>
        </Overlay>
    );
};

export default Dialog;
