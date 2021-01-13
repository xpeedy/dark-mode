import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (darkModeSetting) => {

    const [value, setValue] = useLocalStorage("darkMode", darkModeSetting)
    console.log(value)
    return [value,setValue]
}

export default useDarkMode;