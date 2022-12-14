import { useState, useEffect } from 'react';
import { ANIMATION_POPUP_TIME } from './../core/constants';

interface IUseMountReturn {
    isMounted: boolean;
    isAnimationIn: boolean;
}

export const useMount = (isOpened: boolean): IUseMountReturn => {
    const [isMounted, setIsMounted] = useState(false);
    const [isAnimationIn, setIsAnimationIn] = useState(false);

    useEffect(() => {
        if (isOpened && !isMounted) {
            setIsMounted(true);
        } else if (!isOpened && isMounted) {
            setTimeout(() => {
                setIsMounted(false);
            }, ANIMATION_POPUP_TIME);
        }

        setIsAnimationIn(isMounted && isOpened);
    }, [isOpened, isMounted]);

    return { isMounted, isAnimationIn };
};
