import { useState, useEffect } from 'react';
import { ANIMATION_POPUP_TIME } from './../core/constants';


export const useMount = (isOpened: boolean): boolean => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpened && !isMounted) {
            setIsMounted(true);
        } else if (!isOpened && isMounted) {
            setTimeout(() => {
                setIsMounted(false);
            }, ANIMATION_POPUP_TIME);
        }
    }, [isOpened]);

    return isMounted;
};
