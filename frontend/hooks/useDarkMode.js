import { useState } from 'react';

export const useDarkMode = (initVal) => {
    const [darkMode, setDarkMode] = useState(false);

    return [darkMode, setDarkMode];
}