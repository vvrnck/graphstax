import { INPUT_TEXT, INPUT_EMAIL, INPUT_PASSWORD, INPUT_FILE } from '../constants/input';

export interface IInput {
    name: string;
    label: string;
    type: typeof INPUT_TEXT | typeof INPUT_EMAIL | typeof INPUT_PASSWORD | typeof INPUT_FILE;
    value: string | number;
    files?: Array<File>;
    touched: boolean
}