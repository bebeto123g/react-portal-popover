import React, { FC, ReactNode } from 'react';
import styles from './HeaderPopup.module.scss';

export interface IHeaderPopupProps {
    onClose: () => void;
    onPrevArrow: () => void;
    children: ReactNode;
}

const HeaderPopup: FC<IHeaderPopupProps> = (props) => {
    const { onClose, onPrevArrow, children } = props;
    return (
        <div className={styles.header}>
            <button onClick={onPrevArrow}>НАЗАД</button>
            {children}
            <button onClick={onClose}>ЗАКРЫТЬ</button>
        </div>
    );
};

export default HeaderPopup;
