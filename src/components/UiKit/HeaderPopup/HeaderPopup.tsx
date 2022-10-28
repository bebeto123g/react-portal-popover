import React, { FC, ReactNode } from 'react';

export interface IHeaderPopupProps {
    onClose: () => void;
    onPrevArrow?: () => void;
    children: ReactNode;
}

const HeaderPopup: FC<IHeaderPopupProps> = (props) => {
    const { onClose, onPrevArrow, children } = props;
    return (
        <div className='modal-header'>
            {onPrevArrow && <button onClick={onPrevArrow}>НАЗАД</button>}
            <h5 className='modal-title'>{children}</h5>
            <button onClick={onClose} className='btn-close'></button>
        </div>
    );
};

export default HeaderPopup;
