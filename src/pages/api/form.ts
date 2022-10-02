export function sendFormData(data : Object) {
    return new Promise<null>((resolve,reject) => {
        try {
            alert('should call API');
            resolve(null);
        } catch (e) {
            console.error(e);
            reject(null);
        }
    })
}