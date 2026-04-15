import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate, useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';

export const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 500);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const tab = pathname === '/' ? 'search' : pathname.slice(1);

    useEffect(() => {
        if (debouncedValue) {
            setSearchTerm(debouncedValue);
            navigate(`/${tab}?q=${debouncedValue}`);
        }
    }, [debouncedValue]);

    return (    
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 w-full">
            <input 
                value={text}
                type="text"
                className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="Search SidGoogle or type a URL"
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button
                    type="button"
                    className="absolute top-1.5 right-4 text-xl text-gray-500 hover:text-gray-700"
                    onClick={() => setText('')}
                >
                    ✕
                </button>
            )}
        </div>
    );
}