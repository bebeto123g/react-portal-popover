import React from 'react';
import { render, screen } from '@testing-library/react';
import List, { IListItem } from './List';

const listData: Array<IListItem> = [
    { id: 1, text: 'Text 1', title: 'Title 1' },
    { id: 2, text: 'Text 2', title: 'Title 2' },
];

/** describe подписка-проверка на несколько документов */
describe('test List component', () => {
    test('List renders with props', () => {
        /** Отрендери List с поками */
        render(<List list={listData} />);

        /** getByRole ищет по роил, list метод встроенный в метод */
        /** в данном случае "проверь создается ли вообще список" */
        expect(screen.getByRole('list')).toBeInTheDocument();

        /** найди на экране текст и проверь что есть в документе */
        /** getByText либо текст, либо регулярку */
        expect(screen.getByText(/Title 1/)).toBeInTheDocument();
    });

    test('List renders without props', () => {
        render(<List />);

        /** запрос на роль list, и проверить что это null */
        expect(screen.queryByRole('list')).toBeNull();
    });

    /**
     * сделаем снапшот результата рендера компонента
     *
     * если компонент изменили,
     * то будет ошибка снапшотов, нужнать "u",
     * чтобы перезаписать снапшот, либо удалить папку снапшот
     * */
    test('List Snapshot', () => {
        /** заносим результат рендера в переменную */
        const list = render(<List list={listData} />);

        /** проверить, соответствует ли list снимку, который хранится в папке __snapshots__ */
        expect(list).toMatchSnapshot();
    });

    test('List Snapshot empty list', () => {
        /** заносим результат рендера в переменную */
        const list = render(<List list={[]} />);

        /** проверить, соответствует ли list снимку, который хранится в папке __snapshots__ */
        expect(list).toMatchSnapshot();
    });
});
