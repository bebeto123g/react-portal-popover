import React, { FC, ReactNode } from 'react';
import HeaderPopup from '../HeaderPopup/HeaderPopup';
import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';
import styles from './Popup.module.scss';

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
        <OverlayingPopup isOpened={isOpened} onClose={onClose}>
            <div className={`${styles.container} ${className}`}>
                <HeaderPopup onPrevArrow={onPrevArrow} onClose={onClose}>
                    {title}
                </HeaderPopup>
                {children}
            </div>
        </OverlayingPopup>
    );
};

export default MainPopup;
