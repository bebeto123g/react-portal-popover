import React, { useCallback, useState } from 'react';
import Dialog from '../UiKit/Popup/Dialog/Dialog';
import MainPopup from '../UiKit/Popup/MainPopup/MainPopup';
import styles from './App.module.scss';
import List from '../List/List';
import { listData } from '../../resourse/list';
import { loremText } from '../../resourse/lorem';

const App = () => {
    const [isOpenedPopup, setIsOpenedPopup] = useState(false);
    const [isOpenedDialog, setIsOpenedDialog] = useState(false);

    const handleOpenPopup = () => {
        setIsOpenedPopup(true);
    };

    const handleClosePopup = useCallback(() => {
        setIsOpenedPopup(false);
    }, []);

    const handlePrevArrowPopup = useCallback(() => {
        console.log('click handlePrevArrowPopup');
    }, []);

    const handleOpenDialog = () => {
        setIsOpenedDialog(true);
    };

    const handleCloseDialog = useCallback(() => {
        setIsOpenedDialog(false);
    }, []);

    const handleSuccessDialog = useCallback(() => {
        console.log('click handleSuccessDialog');
        setTimeout(() => {
            setIsOpenedDialog(false);
        }, 1000);
    }, []);

    return (
        <div className={styles.app}>
            <div className='container pt-4'>
                <div className='row mb-4'>
                    <div className='col'>{loremText}</div>
                </div>
                <div className='row mb-4'>
                    <div className='col-2'>
                        <button onClick={handleOpenPopup} className='btn btn-info'>
                            Open MainPopup
                        </button>
                        <button onClick={handleOpenDialog} className='btn btn-warning mt-2'>
                            Open Dialog
                        </button>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col'>
                        <List list={listData} />
                    </div>
                </div>
            </div>
            <MainPopup
                title='Заголовок для MainPopup'
                onPrevArrow={handlePrevArrowPopup}
                onClose={handleClosePopup}
                isOpened={isOpenedPopup}
            >
                <div className=''>{loremText}</div>
            </MainPopup>
            <Dialog
                title='Заголовок Dialog'
                text={loremText}
                onClose={handleCloseDialog}
                isOpened={isOpenedDialog}
                actions={[
                    { text: 'Закрыть', onClick: handleCloseDialog },
                    { text: 'Применить', onClick: handleSuccessDialog, className: 'btn-primary' },
                ]}
            />
        </div>
    );
};

export default App;
