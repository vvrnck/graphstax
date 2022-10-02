import { Ref, useEffect, useState } from "react";
import { ONE_MB } from "../../constants";
import { EVENT_DRAGENTER, EVENT_DRAGLEAVE, EVENT_DRAGOVER, EVENT_DROP } from "../../constants/event";
import { FILE_DOC, FILE_DOCX, FILE_MS_DOC, FILE_PDF } from "../../constants/input";


const useDrag = (ref : any, changeFile : any, setHasError: any) => {
    const [isDragging, setDragging] = useState<boolean>(false);

    const MAX_FILE_SIZE = ONE_MB * 5;

    useEffect(() => {     
        let observableRef : any | null = null;

        function handleDrag(event : DragEvent) : void {
            event.preventDefault();
            event.stopPropagation();

            if (ref.current) {
                const { type, dataTransfer } = event;

                if (!dataTransfer) return;

                
                if (type === EVENT_DRAGENTER || type === EVENT_DRAGOVER) {
                    if (![FILE_PDF, FILE_MS_DOC, FILE_DOC, FILE_DOCX].includes(dataTransfer.items[0].type)) {
                        setHasError(true);
                    } 

                    setHasError(false);
                    
                    setDragging(true);
                }
                
                if (type === EVENT_DRAGLEAVE) {
                    setHasError(false);
                    setDragging(false);
                }

                if (type === EVENT_DROP) {
                    let transferFile = dataTransfer.items[0].getAsFile();
                    if (!transferFile) return;

                    if (transferFile.size > MAX_FILE_SIZE) {
                        changeFile(null);        
                        return setHasError(true);
                    }
                    
                    setHasError(false);
                    changeFile(transferFile);    
                    setDragging(false);
                }
            }
        }

        if (ref.current) {
            ref.current.addEventListener(EVENT_DRAGENTER, handleDrag);
            ref.current.addEventListener(EVENT_DRAGOVER, handleDrag);
            ref.current.addEventListener(EVENT_DRAGLEAVE, handleDrag);
            ref.current.addEventListener(EVENT_DROP, handleDrag);

            observableRef = ref.current;
        }

        return () => {
            if (observableRef) {
                observableRef.removeEventListener(EVENT_DRAGENTER, handleDrag);
                observableRef.removeEventListener(EVENT_DRAGOVER, handleDrag);
                observableRef.removeEventListener(EVENT_DRAGLEAVE, handleDrag);
                observableRef.removeEventListener(EVENT_DROP, handleDrag);
            }
        }
      
    }, [ref, isDragging, changeFile, setHasError, MAX_FILE_SIZE]);

    return { isDragging }
}

export default useDrag;