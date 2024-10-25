import { useEffect, useState } from "react";

// const [watched, setWatched] = useState([]);
// const [watched, setWatched] = useState(function () {
//     const storedValue = localStorage.getItem("watched");

//     return JSON.parse(storedValue);
// });

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [key, value],
    );

    return [value, setValue];
}
