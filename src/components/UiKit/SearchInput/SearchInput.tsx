import React, { ChangeEventHandler, FC, KeyboardEventHandler, useRef, useState } from 'react';

interface ISearchInputProps {
    onSearch: (value: string) => void;
    label?: string;
    name: string;
}

const SearchInput: FC<ISearchInputProps> = (props) => {
    const { onSearch, label, name } = props;

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        onSearch(searchValue);
    };

    const onPressEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.code !== 'Enter') return;
        onSearch(searchValue);
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target as HTMLInputElement;
        if (!value) onSearch('');
        setSearchValue(value);
    };

    return (
        <div className='mb-3 d-flex align-items-end gap-3'>
            <div className='flex-grow-1'>
                {label && (
                    <label htmlFor={name} className='form-label'>
                        {label}
                    </label>
                )}
                <input
                    id={name}
                    className='form-control'
                    type='search'
                    value={searchValue}
                    placeholder='Search list item'
                    onKeyDown={onPressEnter}
                    onChange={handleChange}
                />
            </div>
            <button className='btn btn-primary' onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchInput;
