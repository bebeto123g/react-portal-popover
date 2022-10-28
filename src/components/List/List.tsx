import React, { FC, useCallback, useState } from 'react';
import SearchInput from '../UiKit/SearchInput/SearchInput';

export interface IListItem {
    id: string | number;
    title: string;
    text: string;
}

interface IListProps {
    list?: Array<IListItem>;
}

const List: FC<IListProps> = (props) => {
    const { list } = props;
    const [currentList, setCurrentList] = useState(list);

    const onSearch = useCallback((value: string) => {
        if (!list) return;

        if (!value) {
            setCurrentList(list);
            return;
        }

        value = value.toLowerCase();
        const nerCurrentList = list.filter(
            (item) =>
                item.title.toLowerCase().includes(value) || item.text.toLowerCase().includes(value),
        );

        setCurrentList(nerCurrentList);
    }, [list]);

    if (!list) return null;

    return (
        <>
            <SearchInput
                onSearch={onSearch}
                id='search-list'
                label='Search list'
                placeholder='Search list'
            />
            {currentList?.length ? (
                <ul className='list-group'>
                    {currentList.map((item) => (
                        <li key={item.id} className='list-group-item'>
                            <span>{item.title}</span>
                            <br />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <h5 className='text-center mt-5'>Ничего не найдено</h5>
            )}
        </>
    );
};

export default List;
