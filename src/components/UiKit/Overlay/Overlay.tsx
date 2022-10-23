import React, { FC, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Overlay.module.scss';
import Portal from '../Portal/Portal';
import { useMount } from '../../../hooks/useMount';
import { ANIMATION_POPUP_TIME } from '../../../core/constants';

interface IOverlayProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
}

const Overlay: FC<IOverlayProps> = (props) => {
    const { children, isOpened, onClose } = props;
    const { isMounted, isAnimationIn } = useMount(isOpened);

    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    if (!isMounted) return null;

    return (
        <Portal>
            <div className={styles.container}>
                <CSSTransition
                    nodeRef={overlayRef}
                    timeout={ANIMATION_POPUP_TIME}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enter: styles.overlayEnter,
                        enterActive: styles.overlayEnterActive,
                        exit: styles.overlayExit,
                        exitActive: styles.overlayExitActive,
                    }}
                    in={isAnimationIn}
                >
                    <div
                        ref={overlayRef}
                        className={styles.overlay}
                        onClick={onClose}
                        tabIndex={0}
                    />
                </CSSTransition>
                <CSSTransition
                    nodeRef={contentRef}
                    timeout={ANIMATION_POPUP_TIME}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enter: styles.contentEnter,
                        enterActive: styles.contentEnterActive,
                        exit: styles.contentExit,
                        exitActive: styles.contentExitActive,
                    }}
                    in={isAnimationIn}
                >
                    <div className={styles.content} ref={contentRef}>
                        {children}
                    </div>
                </CSSTransition>
            </div>
        </Portal>
    );
};

export default Overlay;
