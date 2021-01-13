import React, { useState } from "react";

const useLocalStorage = (key,initialValue) => {

    const [storeValue, setStoreValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoreValue(value);
        window.localStorage.setItem(key , JSON.stringify(value))
    }

    return[storeValue, setValue];
   
}

export default useLocalStorage;