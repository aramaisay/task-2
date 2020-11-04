const useDebounce = (time) => {
    const promise = new Promise((resolve,reject) => {
    const timeoutId = setTimeout(()=>{
        clearTimeout(timeoutId);
        resolve();
    },time)
    })
    return promise;

}

export default useDebounce;
