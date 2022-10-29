import { IClassNamesProps } from './interfaces';

export class Utils {
    /* Более лаконичный, но больше операуий
    static classnames(props: IClassNamesProps): string {
        return Object.entries(props)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(' ');
    }
    */

    /**
     * Утилита для динамической генерации классов.
     * Принимает объект типа { [key: string]: boolean; } и возвращет скроку.
     * */
    static classnames(props: IClassNamesProps): string {
        const arr: Array<string> = [];
        Object.entries(props).forEach(([key, value]) => {
            if (value) arr.push(key);
        });
        return arr.join(' ');
    }
}
