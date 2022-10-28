import React, { FC, ReactNode } from 'react';
import HeaderPopup from '../HeaderPopup/HeaderPopup';
import Overlay from '../Overlay/Overlay';
import styles from './MainPopup.module.scss';

interface IMainPopupProps {
    title: ReactNode;
    onClose: () => void;
    onPrevArrow: () => void;
    isOpened: boolean;
    children: ReactNode;
    className?: string;
}

const MainPopup: FC<IMainPopupProps> = (props) => {
    const { title, isOpened, onClose, onPrevArrow, className = '', children } = props;

    return (
        <Overlay isOpened={isOpened} onClose={onClose}>
            <div className={`${styles.container} ${className}`}>
                <HeaderPopup onClose={onClose}>
                    {title}
                </HeaderPopup>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </Overlay>
    );
};

export default MainPopup;
