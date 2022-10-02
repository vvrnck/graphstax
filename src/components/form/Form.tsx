import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import { INPUT_EMAIL, INPUT_FILE, INPUT_PASSWORD, INPUT_TEXT } from '../../constants/input';
import { IInput } from '../../interfaces/form';
import DragDropFile from '../drag-drop-file/DragDropFile';
import styles from '../../styles/Form.module.css';
import { sendFormData } from '../../pages/api/form';
import { ONE_MB } from '../../constants';



const Form : React.FC = () => {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    const [inputs, setInputs] = useState<Array<IInput>>([
        { name: 'name', label: 'First Name', value: '', type: 'text', touched: false },
        { name: 'last_name', label: 'Last Name', value: '', type: 'text', touched: false },
        { name: 'email', label: 'Email', value: '', type: 'email', touched: false },
        { name: 'resume', label: 'Upload Resume (Optional)', value: '', files: [], type: 'file', touched: false },
    ]);

    const isInputInvalid = (input : IInput) => {
        if (input.value === '' && input.touched) return true;
    }

    const handleChange = (e : ChangeEvent) : void => {
        const { name, value, type, files } = e.target as HTMLInputElement;

        const newInputs : Array<IInput> = Object.assign([], inputs);
        const newInput = newInputs.find((input : IInput) => input.name === name);

        if (!newInput) return;

        if (type !== INPUT_FILE) {
            newInput.value = value;
        } else {
            if (!files) return;
            
            const file = files[0];
            if (!file) return;

            if (file.size > ONE_MB) {
                setHasError(true);
                return;  
            } 

            newInput.value = file ? file.name : '';
            newInput.files = [file];

            setHasError(false);
        }

        newInput.touched = true;

        setInputs(newInputs);
    }

    const handleSubmit = async (e : MouseEvent<HTMLButtonElement>) : Promise<void> => {
        e.preventDefault();
        if (!isFieldsValid()) return;
        
        const data : Array<IInput> = Object.assign([], inputs);
        /* 
            here we can make any treatment on 
            the data fields (file for instance) before calling the endpoint
        */

        await sendFormData(data);
    }



    /* checks each input value
        
        email => regex

        file, text, password => checks for not null and empty strings

    */
    const isFieldsValid = () : boolean => {
        let validFields : Array<IInput> = [];

        inputs.map((input : IInput) => {

            if (input.type === INPUT_EMAIL && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value as string)) {
                validFields.push(input);
            }

            if (
                [INPUT_FILE, INPUT_TEXT, INPUT_PASSWORD].includes(input.type) && 
                !['', ' '].includes(input.value as string) &&
                input.value // to check if the user clicked to send a file, but canceled instead
            ) {
                validFields.push(input);
            }            

        });

        return validFields.length === inputs.length ? true : false;
    }

    const removeFile = () : void => {
        const newInputs : Array<IInput> = Object.assign([], inputs);
        const newInput = newInputs.find((input : IInput) => input.name === "resume");

        if (!newInput) return;
        newInput.value = '';
        newInput.files = [];

        setHasError(false);

        setInputs(newInputs);
    }

    const changeFile = (file : File) : void => {
        const newInputs : Array<IInput> = Object.assign([], inputs);
        const newInput = newInputs.find((input : IInput) => input.name === "resume");
        
        if (!newInput) return;

        newInput.value = file ? file.name : '';
        newInput.files = [file];

        setHasError(false);

        setInputs(newInputs);
    }
  
    return (
        <>
            <div className={styles.form__wrapper}>
                <span className='small'>Please fill out the following form to join the Pipeline.</span>
                

                <form aria-label="form">
                    {inputs.map((input : any) => {
                        const { name, label, type, value } = input;

                        if (type === INPUT_FILE) {
                            return (
                                <div key={name} className={styles.form__input__wrapper}>
                                    <label className={styles.form__file__label} htmlFor={name}>{label}</label>
                                    <input 
                                        id={name} 
                                        ref={fileRef} 
                                        required
                                        name={name} 
                                        type={type} 
                                        onChange={handleChange} 
                                        aria-label={name}
                                        accept=".pdf,.doc,.docx"
                                    />
                                                        
                                    <DragDropFile 
                                        ref={fileRef} 
                                        value={input.value} 
                                        removeFile={removeFile} 
                                        changeFile={changeFile}
                                        hasError={hasError}
                                        setHasError={setHasError}

                                    />
                                    
                                </div>
                            )
                        }

                        return (
                            <div key={name} className={styles.form__input__wrapper}>
                                <label 
                                    htmlFor={name} 
                                    style={{ color: isInputInvalid(input) ? '#FF0000' : '#000000' }}
                                >
                                    {label}
                                </label>
                                <input 
                                    className={styles.form__input}
                                    required
                                    aria-label={name}
                                    id={name}
                                    name={name}
                                    type={type}
                                    value={value}
                                    onChange={handleChange}
                                    style={{ borderColor: isInputInvalid(input) ? '#FF0000' : '#c6c6c6' }}
                                />
                                {isInputInvalid(input) && (
                                    <div className="small invalid">
                                        Invalid input!
                                    </div>
                                )}
                            </div>
                        )
                    })}


                    <button 
                        className={!isFieldsValid() ? styles.form__button__disable : styles.form__button__enable} 
                        onClick={handleSubmit} 
                        disabled={!isFieldsValid()}
                    >
                        Submit
                    </button>

                </form>
            </div>
        </>
    )
}

export default Form;