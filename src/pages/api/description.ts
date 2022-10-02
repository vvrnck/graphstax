import { IData } from "../../interfaces/description";

export function getDescriptionData() {
    return new Promise<IData | null>((resolve,reject) => {
        try { 
            const headers = new Headers()
            headers.append('Content-Type', 'application/json')
            
            const config : RequestInit = {
                method: 'GET',
                headers,
                redirect: 'follow'
            }

            let url = 'https://api.prod.workwolf.com/business/public/job-link/4KGQ5SRD';
            fetch(url, config)
                .then(response => resolve(response.json()))
                .catch(e => {
                    console.error(e);
                    resolve(null);
                });       
        } catch (e) {
            console.error(e);
            reject(null);
        }
    })
}