import Image from 'next/image';
import React, { forwardRef, MutableRefObject, Ref, useEffect, useRef } from 'react';
import { useDrag } from '../../hooks';
import styles from '../../styles/DragDropFile.module.css';


type TProps = {
    ref: Ref<HTMLInputElement | null>;
    value: string | number;
    removeFile: () => void;
    changeFile: (value : File) => void;
    hasError: boolean;
    setHasError: (value : boolean) => void;
}

const DragDropFile : React.FC<TProps> = forwardRef(({ value, removeFile, changeFile, setHasError, hasError }, ref) => {

    const dragRef = useRef<HTMLDivElement>(null);
    const { isDragging } = useDrag(dragRef, changeFile, setHasError);

    useEffect(() => {}, [hasError]);

    const handleClick = () => {
        if (!ref) return;

        (ref as MutableRefObject<HTMLInputElement>).current?.click();
    }

    const handleRemoveFile = (event : React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        removeFile();
    }


    const getBorderColor = () => {
        if (isDragging && !hasError) {
            return '#00FF00';
        }

        if (isDragging && hasError) {
            return '#FF0000';
        }

        return '#C9C9C9';
    }

    const getHasErrorMessage = () => {
        if (hasError) return 'Invalid file!';
        
        return 'Drop your file!';
    }

    return (
        <>
            <div className='drag__drop__file' onClick={handleClick}>
                <div className={styles.drag__panel} style={{ borderColor: getBorderColor() }} ref={dragRef}>
                    
                        <span className='align__center'>
                            <Image 
                                src='/vercel.svg'
                                width={100}
                                height={20}
                                alt="upload_image" 
                            />
                        </span>
                    
                        {value && value !== '' ?
                            <>
                                <div className={styles.drag__file__panel} onClick={handleRemoveFile}>
                                    <span className='small'>
                                        {value}
                                    </span>
                                    <span className='small remove'>x</span>
                                </div>
                                
                            </>
                            :
                            <>
                                <div className={styles.form__drag__text}>
                                    {isDragging ?
                                        getHasErrorMessage()
                                    :
                                        <>
                                            <span>Drag your file here or</span>
                                            <span>&nbsp;Browse</span>
                                        </>
                                    }
                                </div>

                                {hasError && 
                                    <div className='invalid small align__center'>
                                        {getHasErrorMessage()}
                                    </div>
                                }

                                <span className='align__center small'>PDF or Word Document (.doc, .docx), smaller than 5 MB</span>
                            </>
                    
                        }
                        
                </div>
            </div>
        </>
    );
});

DragDropFile.displayName = 'DragDropFile';

export default DragDropFile;