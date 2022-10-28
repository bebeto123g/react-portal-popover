import React, { useCallback, useState } from 'react';
import Dialog from '../UiKit/Dialog/Dialog';
import MainPopup from '../UiKit/MainPopup/MainPopup';
import styles from './App.module.scss';
import List from '../List/List';
import { listData } from '../../resourse/list';

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
                    <div className='col'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque iste saepe
                        odit at vel cum reprehenderit fugiat tempora possimus aliquam, nostrum
                        libero nulla sint consequuntur? Deserunt quibusdam, omnis corporis quia,
                        iure veniam dolorum ipsam tempore libero optio eius nam, laboriosam
                        temporibus maxime consequuntur culpa. Quam deserunt, numquam amet
                        laudantium, nam assumenda natus quo eligendi corrupti nihil ex ratione aut
                        quia ipsum reprehenderit! Veritatis ullam libero vero accusantium fugiat
                        explicabo amet delectus doloremque hic numquam quas sapiente tenetur eveniet
                        assumenda corporis voluptatem nobis ratione exercitationem quia optio, eaque
                        soluta nam! Excepturi quae numquam blanditiis velit pariatur esse repellat
                        quo atque similique?
                    </div>
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
                <div className=''>Контент для MainPopup</div>
            </MainPopup>
            <Dialog
                title='Заголовок Dialog'
                text='Текст Dialog'
                onClose={handleCloseDialog}
                isOpened={isOpenedDialog}
                action={{
                    onClick: handleSuccessDialog,
                    text: 'Применить',
                }}
                cancel={{
                    onClick: handleCloseDialog,
                    text: 'Закрыть',
                }}
            />
        </div>
    );
};

export default App;
