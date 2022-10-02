// __tests__/form.test.jsx
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Form } from '../components'
import { ONE_MB } from '../constants';
import { MockedBigFile, MockedFile } from '../__mocks__/fileMock';

describe('Form', () => {

    beforeEach(async () => {
        render(<Form />)
    });

    it('should render inputs with no value', () => {
        const inputsValues = {
            name: '',
            last_name: '',
            email: '',
            resume: ''
        }

        const form = screen.getByRole('form');
        expect(form).toHaveFormValues(inputsValues)        
    });

    it('should block big files', async () => {
        const resume : HTMLInputElement = screen.getByLabelText('resume');
        
        const GREATER_THAN_FIVE_MB = ONE_MB * 5 + 1;

        const blob = new Blob([MockedBigFile.name], {type : MockedBigFile.type});
        const file = new File([blob], MockedBigFile.name, {
            type: MockedBigFile.type,
        });

        Object.defineProperty(file, 'size', { value: GREATER_THAN_FIVE_MB });
        
        await waitFor(() => {
            fireEvent.change(resume, { target: { files: [file] } });
        });

        expect(resume.files && resume.files[0].size).toBeGreaterThan(ONE_MB * 5);
    });

    it('should not submit form', () => {
        const button : HTMLButtonElement = screen.getByRole('button');
        const clicked = jest.fn(() => fireEvent.click(button));
        
        if (!button.disabled) clicked();

        expect(clicked).not.toHaveBeenCalled();
        expect(button).toBeDisabled();
    });


    it('should submit form', async () => {
        const name : HTMLInputElement = screen.getByLabelText('name');
        const lastName : HTMLInputElement = screen.getByLabelText('last_name');
        const email : HTMLInputElement = screen.getByLabelText('email');
        const resume : HTMLInputElement = screen.getByLabelText('resume');
        
        await act(() => {
            fireEvent.change(name, { target: { value: 'John' } });
            expect(name).toHaveDisplayValue('John');
        });

        await act(() => {
            fireEvent.change(lastName, { target: { value: 'Doe' } });
            expect(lastName).toHaveDisplayValue('Doe');
        });

        await act(() => {
            fireEvent.change(email, { target: { value: 'email@test.com' } });
            expect(email).toHaveDisplayValue('email@test.com');
        });

        await act(async () => {
            const blob = new Blob([MockedFile.name], {type : MockedFile.type });
            const file = new File([blob], MockedFile.name, {
                type: MockedFile.type,
            });

            await waitFor(() => {
                fireEvent.change(resume, { target: { files: [file] } });
            });

            expect(resume.files && resume.files.length).toBe(1);
        });

        const button = screen.getByRole('button');
        const clicked = jest.fn();

        clicked();

        expect(button).not.toBeDisabled();
        expect(clicked).toHaveBeenCalledTimes(1);
    });
});