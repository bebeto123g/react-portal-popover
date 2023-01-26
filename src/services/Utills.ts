import { IClassNamesProps } from './interfaces';

export class Utils {
    /** Утилита для динамической генерации классов */
    static classnames(props: IClassNamesProps): string {
        const arr: Array<string> = [];
        Object.entries(props).forEach(([key, value]) => {
            if (value) {
                arr.push(key);
            }
        });
        return arr.join(' ');
    }
}
