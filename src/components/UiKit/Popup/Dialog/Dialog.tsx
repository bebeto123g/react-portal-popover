import React, { FC } from 'react';
import Overlay from '../Overlay/Overlay';
import HeaderPopup from '../HeaderPopup/HeaderPopup';
import FooterPopup, { IDialogFooterActionButton } from '../FooterPopup/FooterPopup';

interface IDialogProps {
    onClose: () => void;
    isOpened: boolean;
    title?: string;
    text: string;
    actions: Array<IDialogFooterActionButton>;
}

const Dialog: FC<IDialogProps> = (props) => {
    const { isOpened, onClose, title, text, actions } = props;

    return (
        <Overlay isOpened={isOpened} onClose={onClose}>
            <div className='modal-dialog modal-dialog-scrollable'>
                <div className='modal-content'>
                    {title && <HeaderPopup onClose={onClose}>{title}</HeaderPopup>}
                    <div className='modal-body'>{text}</div>
                    <FooterPopup actions={actions} />
                </div>
            </div>
        </Overlay>
    );
};

export default Dialog;
